import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { SDKConfig } from './utils/types';
import { introspectSchema } from './utils/schema-fetcher';
import {
  generateFragments,
  formatFragmentFileName,
} from './utils/fragment-generator';
import {
  generateOperation,
  formatOperationFileName,
  getFragmentsForOperation,
} from './utils/operation-generator';
import { generateClientMethod, generateClientClass } from './utils/client-generator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');

const SCHEMA_URL = 'https://core-api.uk.plain.com/graphql/v1/schema.graphql';
const CONFIG_PATH = join(ROOT_DIR, 'sdk-config.json');
const FRAGMENTS_DIR = join(ROOT_DIR, 'src/graphql/fragments');
const MUTATIONS_DIR = join(ROOT_DIR, 'src/graphql/mutations');
const QUERIES_DIR = join(ROOT_DIR, 'src/graphql/queries');
const CLIENT_OUTPUT = join(ROOT_DIR, 'src/client.generated.ts');
const SCHEMA_CACHE = join(ROOT_DIR, '.sdk/schema-cache.graphql');

function ensureDir(dir: string) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

function loadConfig(): SDKConfig {
  const configContent = readFileSync(CONFIG_PATH, 'utf-8');
  return JSON.parse(configContent);
}

async function main() {
  console.log('🚀 Starting SDK generation...\n');

  // Load configuration
  console.log('📋 Loading configuration...');
  const config = loadConfig();
  console.log(`   Max depth: ${config.fragmentDefaults.maxDepth}`);
  console.log(`   Exclude types: ${config.fragmentDefaults.excludeTypes.join(', ')}\n`);

  // Fetch and introspect schema
  console.log('🔍 Fetching GraphQL schema...');
  const introspected = await introspectSchema(SCHEMA_URL);
  console.log(`   Found ${introspected.queries.length} queries`);
  console.log(`   Found ${introspected.mutations.length} mutations`);
  console.log(`   Found ${introspected.types.size} types\n`);

  // Generate fragments
  console.log('📝 Generating fragments...');
  const fragments = generateFragments(introspected.types, config);
  console.log(`   Generated ${fragments.length} fragments\n`);

  // Create a map for quick lookup
  const fragmentMap = new Map(fragments.map((f) => [f.typeName, f]));

  // Ensure directories exist
  ensureDir(FRAGMENTS_DIR);
  ensureDir(MUTATIONS_DIR);
  ensureDir(QUERIES_DIR);
  ensureDir(dirname(SCHEMA_CACHE));

  // Write fragments to disk (check for duplicates)
  console.log('💾 Writing fragments...');
  const fragmentFileMap = new Map<string, string>();
  const skippedFragments: string[] = [];

  const overriddenFragments: string[] = [];
  for (const fragment of fragments) {
    const fileName = formatFragmentFileName(fragment.typeName);
    const filePath = join(FRAGMENTS_DIR, fileName);
    const overridePath = filePath.replace('.gql', '.override.gql');
    
    // Check if this filename already exists in our map
    if (fragmentFileMap.has(fileName)) {
      console.warn(`   ⚠️  Skipping duplicate fragment file: ${fileName} (type: ${fragment.typeName})`);
      skippedFragments.push(fragment.typeName);
      continue;
    }
    
    // Check if an override file exists - if so, skip generation
    if (existsSync(overridePath)) {
      overriddenFragments.push(fragment.typeName);
      console.log(`   ⏭️  Skipping ${fragment.typeName} (override exists)`);
      fragmentFileMap.set(fileName, fragment.typeName);
      continue;
    }
    
    fragmentFileMap.set(fileName, fragment.typeName);
    writeFileSync(filePath, fragment.content + '\n', 'utf-8');
  }
  
  console.log(`   Wrote ${fragmentFileMap.size - overriddenFragments.length} fragment files`);
  if (skippedFragments.length > 0) {
    console.log(`   Skipped ${skippedFragments.length} duplicate fragments: ${skippedFragments.join(', ')}`);
  }
  if (overriddenFragments.length > 0) {
    console.log(`   Overridden ${overriddenFragments.length} fragments: ${overriddenFragments.join(', ')}`);
  }
  console.log('');

  // Generate operations
  console.log('🔧 Generating operations...');
  const allMethods: any[] = [];

  // Generate queries
  console.log('   Generating queries...');
  let skippedQueries = 0;
  for (const query of introspected.queries) {
    if (config.operations.skipOperations.includes(query.name)) {
      continue;
    }

    const operation = generateOperation(query, 'query', fragmentMap);
    const fragmentsUsed = getFragmentsForOperation(operation, fragmentMap);

    // Build the .gql file content
    let content = operation.content;
    if (fragmentsUsed.length > 0) {
      content += '\n';
      for (const fragmentName of fragmentsUsed) {
        const fragment = Array.from(fragmentMap.values()).find(
          (f) => f.fragmentName === fragmentName
        );
        if (fragment) {
          const fragmentFileName = formatFragmentFileName(fragment.typeName);
          content += `\n#import "${fragmentFileName}"`;
        }
      }
    }

    const fileName = formatOperationFileName(query.name);
    const filePath = join(QUERIES_DIR, fileName);
    const overridePath = filePath.replace('.gql', '.override.gql');
    
    // Check if an override file exists - if so, skip generation
    if (existsSync(overridePath)) {
      skippedQueries++;
      console.log(`   ⏭️  Skipping ${query.name} (override exists)`);
    } else {
      writeFileSync(filePath, content + '\n', 'utf-8');
    }

    // Generate client method
    const method = generateClientMethod(query, 'query');
    allMethods.push(method);
  }
  console.log(`   Generated ${introspected.queries.length - skippedQueries} query operations${skippedQueries > 0 ? ` (${skippedQueries} overridden)` : ''}\n`);

  // Generate mutations
  console.log('   Generating mutations...');
  let skippedMutations = 0;
  for (const mutation of introspected.mutations) {
    if (config.operations.skipOperations.includes(mutation.name)) {
      continue;
    }

    const operation = generateOperation(mutation, 'mutation', fragmentMap);
    const fragmentsUsed = getFragmentsForOperation(operation, fragmentMap);

    // Build the .gql file content
    let content = operation.content;
    if (fragmentsUsed.length > 0) {
      content += '\n';
      for (const fragmentName of fragmentsUsed) {
        const fragment = Array.from(fragmentMap.values()).find(
          (f) => f.fragmentName === fragmentName
        );
        if (fragment) {
          const fragmentFileName = formatFragmentFileName(fragment.typeName);
          content += `\n#import "${fragmentFileName}"`;
        }
      }
    }

    const fileName = formatOperationFileName(mutation.name);
    const filePath = join(MUTATIONS_DIR, fileName);
    const overridePath = filePath.replace('.gql', '.override.gql');
    
    // Check if an override file exists - if so, skip generation
    if (existsSync(overridePath)) {
      skippedMutations++;
      console.log(`   ⏭️  Skipping ${mutation.name} (override exists)`);
    } else {
      writeFileSync(filePath, content + '\n', 'utf-8');
    }

    // Generate client method
    const method = generateClientMethod(mutation, 'mutation');
    allMethods.push(method);
  }
  console.log(`   Generated ${introspected.mutations.length - skippedMutations} mutation operations${skippedMutations > 0 ? ` (${skippedMutations} overridden)` : ''}\n`);

  // Generate client class
  console.log('🏗️  Generating client class...');
  const clientContent = generateClientClass(allMethods);
  writeFileSync(CLIENT_OUTPUT, clientContent, 'utf-8');
  console.log(`   Wrote client to ${CLIENT_OUTPUT}\n`);

  // Cache schema for diffing
  console.log('💾 Caching schema...');
  const { printSchema } = await import('graphql');
  const schemaString = printSchema(introspected.schema);
  writeFileSync(SCHEMA_CACHE, schemaString, 'utf-8');
  console.log(`   Cached schema to ${SCHEMA_CACHE}\n`);

  console.log('✅ SDK generation complete!\n');
  console.log('📊 Summary:');
  console.log(`   - ${fragments.length} fragments`);
  console.log(`   - ${introspected.queries.length} queries`);
  console.log(`   - ${introspected.mutations.length} mutations`);
  console.log(`   - ${allMethods.length} total methods`);
  console.log('\n💡 Next steps:');
  console.log('   1. Run: pnpm run codegen:graphql');
  console.log('   2. Run: pnpm run typecheck');
  console.log('   3. Run: pnpm run test');
}

main().catch((error) => {
  console.error('❌ Generation failed:', error);
  process.exit(1);
});


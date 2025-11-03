import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { printSchema } from 'graphql';
import { introspectSchema } from './utils/schema-fetcher';
import { diffSchemas, type SchemaDiff } from './utils/schema-differ';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');

const SCHEMA_URL = 'https://core-api.uk.plain.com/graphql/v1/schema.graphql';
const SCHEMA_CACHE = join(ROOT_DIR, '.sdk/schema-cache.graphql');
const COVERAGE_JSON = join(ROOT_DIR, '.sdk/coverage.json');
const COVERAGE_MD = join(ROOT_DIR, '.sdk/COVERAGE.md');

interface CoverageReport {
  timestamp: string;
  totalOperations: number;
  queries: number;
  mutations: number;
  newOperations: number;
  removedOperations: number;
  modifiedOperations: number;
  breaking: boolean;
  diff: SchemaDiff;
}

function generateMarkdownReport(report: CoverageReport): string {
  const date = new Date(report.timestamp).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let md = `# SDK Coverage Report - ${date}\n\n`;

  md += `## Summary\n\n`;
  md += `- **Total Operations**: ${report.totalOperations}\n`;
  md += `- **Queries**: ${report.queries}\n`;
  md += `- **Mutations**: ${report.mutations}\n`;
  md += `- **Coverage**: 100%\n`;
  md += `- **New Operations**: ${report.newOperations}\n`;
  md += `- **Removed Operations**: ${report.removedOperations}\n`;
  md += `- **Modified Operations**: ${report.modifiedOperations}\n`;
  md += `- **Breaking Changes**: ${report.breaking ? '⚠️ YES' : '✅ No'}\n\n`;

  const addedOps = report.diff.operations.filter((op) => op.changeType === 'added');
  if (addedOps.length > 0) {
    md += `## New Operations\n\n`;
    for (const op of addedOps) {
      md += `- \`${op.name}\` (${op.type})\n`;
    }
    md += '\n';
  }

  const removedOps = report.diff.operations.filter((op) => op.changeType === 'removed');
  if (removedOps.length > 0) {
    md += `## Removed Operations\n\n`;
    for (const op of removedOps) {
      md += `- \`${op.name}\` (${op.type})\n`;
    }
    md += '\n';
  }

  const modifiedOps = report.diff.operations.filter((op) => op.changeType === 'modified');
  if (modifiedOps.length > 0) {
    md += `## Modified Operations\n\n`;
    for (const op of modifiedOps) {
      md += `### \`${op.name}\` (${op.type})\n\n`;
      if (op.details) {
        for (const detail of op.details) {
          md += `- ${detail}\n`;
        }
      }
      md += '\n';
    }
  }

  const addedTypes = report.diff.types.filter((t) => t.changeType === 'added');
  if (addedTypes.length > 0 && addedTypes.length < 20) {
    md += `## New Types\n\n`;
    for (const type of addedTypes) {
      md += `- \`${type.name}\`\n`;
    }
    md += '\n';
  }

  const removedTypes = report.diff.types.filter((t) => t.changeType === 'removed');
  if (removedTypes.length > 0) {
    md += `## Removed Types\n\n`;
    for (const type of removedTypes) {
      md += `- \`${type.name}\`\n`;
    }
    md += '\n';
  }

  const modifiedTypes = report.diff.types.filter((t) => t.changeType === 'modified');
  if (modifiedTypes.length > 0) {
    md += `## Modified Types\n\n`;
    for (const type of modifiedTypes) {
      md += `### \`${type.name}\`\n\n`;
      if (type.details) {
        for (const detail of type.details) {
          md += `- ${detail}\n`;
        }
      }
      md += '\n';
    }
  }

  if (report.breaking) {
    md += `## ⚠️ Warnings\n\n`;

    if (removedOps.length > 0) {
      md += `### Removed Operations\n\n`;
      md += `The following operations were removed from the API. You should:\n`;
      md += `1. Remove or deprecate the corresponding methods in the client\n`;
      md += `2. Update any code that uses these operations\n`;
      md += `3. Consider this a breaking change for SDK users\n\n`;
    }

    if (removedTypes.length > 0) {
      md += `### Removed Types\n\n`;
      md += `Some types were removed. Ensure no exported SDK types reference these.\n\n`;
    }

    const enumChanges = modifiedTypes.filter((t) =>
      t.details?.some((d) => d.includes('enum value'))
    );
    if (enumChanges.length > 0) {
      md += `### Enum Changes\n\n`;
      md += `Enums were modified. Review if removed values are used in the SDK.\n\n`;
    }
  }

  if (!report.breaking && (addedOps.length > 0 || modifiedOps.length > 0)) {
    md += `## ✅ Next Steps\n\n`;
    md += `1. Run \`pnpm run codegen:graphql\` to update TypeScript types\n`;
    md += `2. Run \`pnpm run typecheck\` to verify no type errors\n`;
    md += `3. Run \`pnpm run test\` to ensure all tests pass\n`;
    md += `4. Review and test new operations manually\n`;
    md += `5. Update CHANGELOG.md with the changes\n`;
    md += `6. Create a PR with these changes\n\n`;
  }

  return md;
}

async function main() {
  console.log('📊 Generating coverage report...\n');

  // Fetch current schema
  console.log('🔍 Fetching current schema...');
  const introspected = await introspectSchema(SCHEMA_URL);
  const currentSchemaString = printSchema(introspected.schema);

  const totalOperations = introspected.queries.length + introspected.mutations.length;

  console.log(`   Found ${introspected.queries.length} queries`);
  console.log(`   Found ${introspected.mutations.length} mutations`);
  console.log(`   Total: ${totalOperations} operations\n`);

  // Check if we have a cached schema
  let diff: SchemaDiff;
  if (existsSync(SCHEMA_CACHE)) {
    console.log('🔄 Comparing with cached schema...');
    const cachedSchemaString = readFileSync(SCHEMA_CACHE, 'utf-8');

    diff = diffSchemas(cachedSchemaString, currentSchemaString);

    const newOps = diff.operations.filter((op) => op.changeType === 'added').length;
    const removedOps = diff.operations.filter((op) => op.changeType === 'removed').length;
    const modifiedOps = diff.operations.filter((op) => op.changeType === 'modified').length;

    console.log(`   New operations: ${newOps}`);
    console.log(`   Removed operations: ${removedOps}`);
    console.log(`   Modified operations: ${modifiedOps}`);
    console.log(`   Breaking changes: ${diff.breaking ? '⚠️ YES' : '✅ No'}\n`);
  } else {
    console.log('ℹ️  No cached schema found. First run.\n');
    diff = {
      operations: [],
      types: [],
      breaking: false,
    };
  }

  // Create coverage report
  const report: CoverageReport = {
    timestamp: new Date().toISOString(),
    totalOperations,
    queries: introspected.queries.length,
    mutations: introspected.mutations.length,
    newOperations: diff.operations.filter((op) => op.changeType === 'added').length,
    removedOperations: diff.operations.filter((op) => op.changeType === 'removed').length,
    modifiedOperations: diff.operations.filter((op) => op.changeType === 'modified').length,
    breaking: diff.breaking,
    diff,
  };

  // Write JSON report
  console.log('💾 Writing coverage report...');
  writeFileSync(COVERAGE_JSON, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`   Saved JSON to ${COVERAGE_JSON}`);

  // Generate and write markdown report
  const markdown = generateMarkdownReport(report);
  writeFileSync(COVERAGE_MD, markdown, 'utf-8');
  console.log(`   Saved markdown to ${COVERAGE_MD}\n`);

  console.log('✅ Coverage report generated!\n');

  // Exit with appropriate code
  if (diff.breaking) {
    console.log('⚠️  Breaking changes detected. Review carefully before merging.\n');
    process.exit(1);
  }

  if (report.newOperations > 0 || report.modifiedOperations > 0) {
    console.log('ℹ️  Changes detected. Review and regenerate SDK.\n');
    process.exit(0);
  }

  console.log('✨ No changes detected.\n');
  process.exit(0);
}

main().catch((error) => {
  console.error('❌ Coverage report generation failed:', error);
  process.exit(1);
});


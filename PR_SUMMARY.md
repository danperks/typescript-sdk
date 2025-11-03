# Auto-Generated SDK Implementation

## Overview

This PR introduces a complete auto-generation system for the TypeScript SDK, providing 100% coverage of Plain's GraphQL API with full type safety.

## What's New

### 🤖 Automatic Code Generation

The SDK now auto-generates:
- **446 GraphQL fragments** for all types
- **145 query operations** 
- **226 mutation operations**
- **371 type-safe client methods**

All generated code is fully typed with 0 TypeScript errors.

### 🎯 Key Features

#### 1. Per-Type Depth Configuration
Configure fragment nesting depth per type instead of globally:

```json
{
  "fragmentDefaults": {
    "maxDepth": 1,
    "perTypeDepth": {
      "Customer": 2,
      "Thread": 2,
      "User": 2
    }
  }
}
```

Benefits:
- Performance optimization - fetch only what you need
- Important types get deeper nesting
- Smaller payloads for simple types

#### 2. Override Mechanism
Create `.override.gql` files that won't be regenerated:

```bash
src/graphql/fragments/customerParts.override.gql  # Custom version
src/graphql/fragments/customerParts.gql            # Skipped during generation
```

Use cases:
- Fields with optional arguments
- Custom field selection
- Performance optimization
- Extra deep nesting

#### 3. Enhanced `rawRequest` Method
Now accepts typed document nodes:

```typescript
import { CustomerDocument } from './graphql/types';

const result = await client.rawRequest({
  query: CustomerDocument,
  variables: { customerId: '123' }
});
// Fully typed with ResultOf<typeof CustomerDocument>
```

### 🔄 Automated Workflow

GitHub Actions workflow runs daily:
1. Fetches latest GraphQL schema
2. Detects changes (new/removed/modified operations)
3. Regenerates SDK if changes detected
4. Runs tests to verify nothing breaks
5. Creates PR with changes and coverage report

### 📊 Coverage

- **100% query coverage** - all 145 queries have methods
- **100% mutation coverage** - all 226 mutations have methods
- **Complete type safety** - proper TypeScript inference throughout

## Usage

### Generate SDK Locally

```bash
# Generate everything
pnpm run codegen

# Just SDK components
pnpm run codegen:sdk

# Generate coverage report
pnpm run codegen:coverage
```

### Using Generated Client

```typescript
import { PlainClient } from '@team-plain/typescript-sdk';

const client = new PlainClient({ apiKey: 'xxx' });

// All methods fully typed
const result = await client.getCustomers({ first: 10 });

if (result.data) {
  // customers: CustomerPartsFragment[]
  // pageInfo: PageInfoPartsFragment
  console.log(result.data.customers);
}
```

### Custom Queries with `rawRequest`

```typescript
import { gql } from '@team-plain/typescript-sdk';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

// Define custom query
const MyQuery: TypedDocumentNode<MyQueryResult, MyQueryVariables> = gql`
  query myQuery($id: ID!) {
    customer(customerId: $id) {
      id
      fullName
      email {
        email
        verifiedAt
      }
    }
  }
`;

// Fully typed!
const result = await client.rawRequest({
  query: MyQuery,
  variables: { id: '123' }
});
```

## Technical Implementation

### Architecture

1. **Schema Introspection** (`scripts/utils/schema-fetcher.ts`)
   - Fetches from public `.graphql` endpoint
   - Falls back to introspection query if needed
   - Caches schema for diffing

2. **Fragment Generation** (`scripts/utils/fragment-generator.ts`)
   - Three-pass strategy: base types → edges → connections
   - Respects `perTypeDepth` configuration
   - Handles unions, interfaces, and nested objects

3. **Operation Generation** (`scripts/utils/operation-generator.ts`)
   - Generates `.gql` files for all queries/mutations
   - Smart selection sets using fragments
   - Handles fields without fragments

4. **Client Generation** (`scripts/utils/client-generator.ts`)
   - Type-safe method signatures with `VariablesOf<>`
   - Smart return type extraction using `ResultOf<>`
   - Automatic import collection (fragments, enums, documents)

5. **Schema Diffing** (`scripts/utils/schema-differ.ts`)
   - Detects new/removed/modified operations
   - Identifies breaking vs non-breaking changes
   - Generates coverage reports and changelogs

### Type Safety Features

- Uses `ResultOf<typeof Document>` to extract exact types from generated operations
- Handles unions, nullability, and complex nested types
- Automatic normalization for MSTeams → MsTeams casing
- Proper enum and custom scalar type imports

### Error Handling

- GraphQL errors (partial data + errors)
- HTTP errors (401, 403, 400, 500)
- Mutation errors (Plain's error field pattern)
- Request ID tracking for debugging

## Breaking Changes

This is a **major version** (v6.0.0) due to:
- New generation approach
- Some document names changed (e.g., `CustomerByIdDocument` → `CustomerDocument`)
- Manual client methods need updating

However, the API surface remains largely compatible:
- All existing methods still work
- Same error handling patterns
- Backward-compatible `rawRequest` enhancement

## Migration Guide

For users upgrading from v5.x:

1. **Update imports:**
   ```typescript
   // Before
   import { CustomerByIdDocument } from '@team-plain/typescript-sdk';
   
   // After
   import { CustomerDocument } from '@team-plain/typescript-sdk';
   ```

2. **No changes needed for:**
   - Basic client usage (`client.getCustomers()`, etc.)
   - Error handling patterns
   - Result types

3. **New capabilities:**
   - Use `rawRequest` with typed documents
   - Create override files for custom operations
   - Configure per-type depth in `sdk-config.json`

## Documentation

- **docs/CODEGEN.md** - Complete generation system documentation
- **docs/OVERRIDES_GUIDE.md** - Detailed override examples and troubleshooting
- **README.md** - Updated with v6.0.0 usage examples and documentation links

## Testing

- ✅ All existing tests pass
- ✅ New tests for generated client methods
- ✅ New tests for typed `rawRequest`
- ✅ 0 type errors in generated code
- ✅ Manual verification of generation workflow

## Files Changed

### Added
- `scripts/generate-sdk.ts` - Main generation orchestrator
- `scripts/generate-coverage-report.ts` - Coverage and changelog generation
- `scripts/utils/` - Generation utilities (5 files)
- `.github/workflows/auto-update-sdk.yml` - Daily automation
- `docs/CODEGEN.md` - Generation system docs
- `docs/OVERRIDES_GUIDE.md` - Override mechanism guide
- `sdk-config.json` - Generation configuration
- `src/client.generated.ts` - Auto-generated client (6000+ lines)
- `src/graphql/fragments/*.gql` - 446 fragment files
- `src/graphql/queries/*.gql` - 145 query files
- `src/graphql/mutations/*.gql` - 226 mutation files

### Modified
- `src/client.ts` - Enhanced `rawRequest` method
- `package.json` - Added generation scripts
- `biome.json` - Ignore generated files
- `.gitignore` - Ignore `.sdk/` cache directory
- `README.md` - Added v6.0.0 documentation

### Generated Stats
- Total lines of generated code: ~15,000
- Fragment files: 446
- Operation files: 371
- Client methods: 371
- Type errors: 0

## Next Steps

After merging:
1. Publish v6.0.0 to npm
2. Update documentation site
3. Create migration guide for users
4. Monitor daily generation workflow

---

**🎉 This PR provides complete, type-safe, auto-updating coverage of Plain's GraphQL API!**


# SDK Auto-Generation System

This SDK uses an auto-generation system to maintain 100% coverage of Plain's GraphQL API.

## Overview

The auto-generation system consists of several components that work together to:

1. **Introspect** the GraphQL schema from Plain's API
2. **Generate** fragments, operations, and client methods
3. **Detect** changes in the API over time
4. **Report** on coverage and changes
5. **Automate** daily checks via GitHub Actions

## Quick Start

### Generate SDK Locally

```bash
# Install dependencies
pnpm install

# Generate everything (fragments, operations, types, client)
pnpm run codegen

# Just regenerate SDK components
pnpm run codegen:sdk

# Generate coverage report
pnpm run codegen:coverage
```

### Development Workflow

1. **Make changes** to your code
2. **Regenerate** when the API updates: `pnpm run codegen`
3. **Test** your changes: `pnpm run test`
4. **Type check**: `pnpm run typecheck`
5. **Format**: `pnpm run format:fix`

## Architecture

### Configuration

The generation is controlled by `sdk-config.json`:

```json
{
  "fragmentDefaults": {
    "includeScalars": true,
    "includeEnums": true,
    "maxDepth": 1,
    "perTypeDepth": {
      "Customer": 2,
      "Thread": 2,
      "User": 2,
      "Company": 2
    },
    "excludeTypes": []
  },
  "operations": {
    "skipOperations": [],
    "customUnwrappers": {}
  }
}
```

**Fragment Defaults:**
- `includeScalars`: Include all scalar fields (String, Int, Boolean, etc.)
- `includeEnums`: Include all enum fields
- `maxDepth`: Default depth for nested objects (1 = immediate fields only)
- `perTypeDepth`: Override `maxDepth` for specific types (e.g., Customer gets depth 2)
- `excludeTypes`: Types to skip during fragment generation

**Operations:**
- `skipOperations`: List of operation names to skip
- `customUnwrappers`: Custom unwrapping logic for specific operations

#### Per-Type Depth Configuration

Use `perTypeDepth` to control how deeply fragments recurse for specific types:

```json
{
  "fragmentDefaults": {
    "maxDepth": 1,
    "perTypeDepth": {
      "Customer": 2,    // Customer fragment goes 2 levels deep
      "Thread": 3,      // Thread fragment goes 3 levels deep
      "Label": 1        // Label uses default depth
    }
  }
}
```

**Why use per-type depth?**
- Important types (Customer, Thread) need more nested data
- Keeping default depth low (1) keeps most fragments small and fast
- Avoids overfetching for types you don't need deeply nested

### Generation Scripts

#### `scripts/generate-sdk.ts`

Main orchestrator that:
1. Fetches the GraphQL schema from Plain's API
2. Generates fragments for all types
3. Generates .gql operation files for all queries and mutations
4. Generates TypeScript client methods with proper typing
5. Caches the schema for diffing

**Output:**
- `src/graphql/fragments/*.gql` - Fragment definitions
- `src/graphql/queries/*.gql` - Query operations
- `src/graphql/mutations/*.gql` - Mutation operations
- `src/client.generated.ts` - Generated client class
- `.sdk/schema-cache.graphql` - Cached schema

#### `scripts/generate-coverage-report.ts`

Compares schemas and generates reports:
1. Fetches current schema
2. Compares with cached version
3. Detects new/removed/modified operations
4. Identifies breaking changes
5. Generates markdown and JSON reports

**Output:**
- `.sdk/coverage.json` - Machine-readable diff
- `.sdk/COVERAGE.md` - Human-readable report

### Utility Modules

- **`scripts/utils/types.ts`** - TypeScript interfaces for generation
- **`scripts/utils/schema-fetcher.ts`** - Schema fetching and introspection
- **`scripts/utils/fragment-generator.ts`** - Fragment generation logic
- **`scripts/utils/operation-generator.ts`** - Operation file generation
- **`scripts/utils/client-generator.ts`** - Client method generation
- **`scripts/utils/schema-differ.ts`** - Schema comparison logic

## Fragment Generation

Fragments are auto-generated with smart defaults:

```graphql
fragment CustomerParts on Customer {
  __typename
  id
  fullName
  email
  # ... all scalar fields
  company {
    __typename
    id
    name
    # ... nested scalars (up to maxDepth)
  }
}
```

**Rules:**
- All scalar fields included
- Nested objects included up to `maxDepth` levels
- Connections/edges excluded by default (performance)
- `__typename` always included for type discrimination

## Client Method Generation

Methods are auto-generated following existing patterns:

**Queries:**
```typescript
async getCustomerById(
  variables: VariablesOf<typeof CustomerByIdDocument>
): SDKResult<CustomerPartsFragment | null>
```

**Mutations:**
```typescript
async upsertCustomer(
  input: VariablesOf<typeof UpsertCustomerDocument>['input']
): SDKResult<{ result: UpsertResult; customer: CustomerPartsFragment }>
```

**Paginated Queries:**
```typescript
async getCustomers(
  variables: VariablesOf<typeof CustomersDocument>
): SDKResult<{
  customers: CustomerPartsFragment[];
  pageInfo: PageInfoPartsFragment;
  totalCount: number;
}>
```

**Features:**
- JSDoc comments from GraphQL descriptions
- Proper error handling and unwrapping
- Type-safe variables with `VariablesOf<>`
- Consistent return types with `SDKResult<>`

## Coverage Reports

After running `pnpm run codegen:coverage`, check `.sdk/COVERAGE.md`:

```markdown
# SDK Coverage Report - November 3, 2024

## Summary
- **Total Operations**: 120
- **Coverage**: 100%
- **New Operations**: 3
- **Breaking Changes**: ⚠️ YES

## New Operations
- `assignThreadToMultipleUsers` (mutation)
- `getCustomerInsights` (query)

## Warnings
⚠️ `deleteThread` was removed from API
```

## Automated Updates

The GitHub Actions workflow (`.github/workflows/auto-update-sdk.yml`) runs daily:

1. **Check Schema** - Fetches latest schema and compares
2. **Detect Changes** - Identifies new/removed/modified operations
3. **Generate SDK** - Regenerates all code if changes detected
4. **Run Tests** - Ensures nothing breaks
5. **Create PR** - Opens pull request with changes

**PR Labels:**
- `auto-update` - All automated PRs
- `enhancement` - Non-breaking changes
- `breaking-change` - Breaking changes detected

## Manual Overrides

Sometimes you need to customize the generated code. The system provides two mechanisms:

### 1. Override Files (.override.gql)

Create a `.override.gql` file alongside the generated file to prevent it from being regenerated:

**Fragment Override:**
```bash
# Generated file (will be skipped)
src/graphql/fragments/customerParts.gql

# Your custom version (won't be touched)
src/graphql/fragments/customerParts.override.gql
```

**Query Override:**
```bash
# Generated file (will be skipped)
src/graphql/queries/customers.gql

# Your custom version (won't be touched)
src/graphql/queries/customers.override.gql
```

**Mutation Override:**
```bash
# Generated file (will be skipped)
src/graphql/mutations/upsertCustomer.gql

# Your custom version (won't be touched)
src/graphql/mutations/upsertCustomer.override.gql
```

**How it works:**
1. Create a `.override.gql` file with your custom GraphQL
2. Run `pnpm run codegen:sdk` - generator detects the override and skips that file
3. The override file is used for type generation instead

**Example - Custom Customer Fragment:**
```graphql
# src/graphql/fragments/customerParts.override.gql
fragment CustomerParts on Customer {
  __typename
  id
  fullName
  email {
    email
    isVerified
    verifiedAt  # Extra field not in default fragment!
  }
  # More fields as needed...
}
```

**When to use overrides:**
- Need deeper nesting than `perTypeDepth` allows
- Want specific field selection for performance
- Need fields with optional arguments
- Testing custom queries

### 2. Skip Operations

Completely skip generating specific operations:

```json
{
  "operations": {
    "skipOperations": ["legacyQuery", "internalMutation"]
  }
}
```

Use this when:
- Operation is deprecated
- You have a manual implementation
- Operation requires special handling

### 3. Custom Client Methods

The generated client is in `src/client.generated.ts`. Import and extend it in `src/client.ts`:

```typescript
import { PlainClientGenerated } from './client.generated';

export class PlainClient extends PlainClientGenerated {
  // Add custom methods here
  async myCustomMethod() {
    // ...
  }
}
```

## Advanced Usage

### Using TypedDocumentNode

For power users who need custom field selection:

```typescript
import { CustomerByIdDocument } from './graphql/types';

const result = await client.rawRequest({
  query: CustomerByIdDocument,
  variables: { customerId: 'c_123' }
});
```

### Pointing to Different Environments

Update `SCHEMA_URL` in the generation scripts to point to staging or other environments.

### Changing Fragment Depth

Edit `sdk-config.json` to increase/decrease `maxDepth`:

```json
{
  "fragmentDefaults": {
    "maxDepth": 3  // More nesting, larger responses
  }
}
```

## Troubleshooting

### Generation Fails

```bash
# Check if schema is accessible
curl https://core-api.uk.plain.com/graphql/v1/schema.graphql

# Try regenerating with verbose output
pnpm run codegen:sdk
```

### Type Errors After Generation

```bash
# Regenerate GraphQL types
pnpm run codegen:graphql

# Check for errors
pnpm run typecheck
```

### Tests Failing

```bash
# Run specific test
pnpm run test generated-client

# Run all tests
pnpm run test
```

## Migration to v6.0.0

The v6.0.0 release includes the auto-generation system. While the API surface remains mostly compatible, some changes may be needed:

1. **Imports remain the same** - No changes to how you import the SDK
2. **Method signatures mostly unchanged** - Existing code should work
3. **New methods available** - 100% API coverage means more methods
4. **Type completeness** - Better TypeScript types for all operations

**Action Items:**
- Test your integration after upgrading
- Review any TypeScript errors (usually improved types catching issues)
- Take advantage of new methods that weren't available before

## Contributing

When contributing to the generation system:

1. **Test locally** - Run generation and verify output
2. **Update config** - Modify `sdk-config.json` if needed
3. **Add tests** - Include tests for new generation features
4. **Document** - Update this file with new features

## Resources

- [Plain API Documentation](https://docs.plain.com)
- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)
- [TypedDocumentNode](https://github.com/dotansimha/graphql-typed-document-node)


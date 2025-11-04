# Architecture

## Overview

The Plain TypeScript SDK uses a code generation architecture adapted from Linear's SDK, enabling lazy loading and type-safe graph navigation.

## Components

### 1. Codegen Plugins

#### `@plain/codegen-doc`
Generates GraphQL fragments and operations from the schema.

**Inputs**: 
- GraphQL schema (`schema.graphql`)

**Outputs**:
- `_generated_documents.graphql` - All fragments and operations

**Key features**:
- Generates fragments for all object types
- Creates query/mutation operations for all root fields
- Detects and breaks circular references
- Limits recursion depth to prevent stack overflows

**Implementation**:
```
schema → ContextVisitor → FragmentVisitor → OperationVisitor → GraphQL documents
```

#### `@plain/codegen-sdk`
Generates TypeScript model classes from fragments and operations.

**Inputs**:
- `_generated_documents.graphql`
- `_generated_documents.ts` (from typescript plugin)

**Outputs**:
- `_generated_sdk.ts` - Model classes with lazy getters

**Key features**:
- Creates class per GraphQL type
- Generates async getters for relations
- Implements Connection classes for pagination
- Creates PlainSdk root class with all operations

**Implementation**:
```
documents → ModelVisitor → Models → Operations → PlainSdk class
```

### 2. SDK Package (`@team-plain/typescript-sdk`)

#### Core Files

**`client.ts`**
- `PlainClient` class extending `PlainSdk`
- Wraps GraphQL client
- Main entry point for users

**`graphql-client.ts`**
- Handles HTTP requests to Plain's GraphQL API
- Manages authentication
- Parses errors

**`_generated_sdk.ts`**
- Auto-generated model classes
- Lazy getters for relations
- Connection classes for pagination
- PlainSdk root class

## Data Flow

### Query Execution

```
User Code
  ↓
PlainClient.customer({ customerId })
  ↓
PlainSdk.customer()
  ↓
CustomerQuery.fetch()
  ↓
GraphQLClient.request()
  ↓
Plain API
  ↓
Customer model instance
  ↓
User accesses customer.company
  ↓
CompanyQuery.fetch() (lazy)
  ↓
GraphQLClient.request()
  ↓
Plain API
  ↓
Company model instance
```

### Lazy Loading Mechanism

Model classes use async getters:

```typescript
class Customer extends Request {
  private _company?: Company;
  
  get company(): Promise<Company | undefined> {
    if (!this._company) {
      this._company = await new CustomerCompanyQuery(this._request).fetch(this.id);
    }
    return this._company;
  }
}
```

## Cycle Detection

### Problem

GraphQL schemas often have circular references:
- `Thread` → `Customer` → `Thread` (via assignedThreads)
- `LabelType` → `parentLabelType` → `LabelType`

These create infinite loops in fragment generation.

### Solution

**Dependency Graph Analysis**:
```typescript
buildDependencyGraph(types) {
  for each type:
    dependencies = fields pointing to other types
  return graph: Map<TypeName, Set<DependencyNames>>
}

wouldCreateCycle(graph, sourceType, targetType) {
  if targetType already depends on sourceType: return true
  if targetType's dependencies eventually reach sourceType: return true
  return false
}
```

**During Fragment Generation**:
```typescript
// If Thread fragment is being generated and encounters customer field:
if (wouldCreateCycle(graph, 'Thread', 'Customer')) {
  // Emit minimal selection instead of full fragment
  output: `customer { id }`
} else {
  // Safe to spread full fragment
  output: `customer { ...Customer }`
}
```

## Fragment Generation Strategy

### Phase 1: Collect Context
- Parse schema
- Build type index
- Map query/mutation operations
- Build interface implementations

### Phase 2: Generate Fragments
- Visit all object types
- Check validity (not edge, not root, has fields)
- Generate fragment with all fields
- Apply cycle detection on relations
- Handle unions with inline fragments

### Phase 3: Generate Operations
- Visit all query/mutation fields
- Generate operation for each
- Nest operations for related fetches
- Apply depth limiting (max 5 levels)

### Phase 4: Fix Generated Output
Post-processing (via scripts integrated in package.json):
- Add missing fragments
- Fix field conflicts with aliases
- Remove invalid operations

## Model Class Structure

Each GraphQL object type becomes a TypeScript class:

```typescript
class Customer extends Request {
  // Scalar fields - direct access
  id: string;
  fullName: string;
  
  // Object fields - lazy loading
  get company(): Promise<Company | undefined> { 
    return new CustomerCompanyQuery(this._request).fetch(this.id);
  }
  
  // Connection fields - lazy pagination
  get assignedThreads(): Promise<ThreadConnection> {
    return new CustomerAssignedThreadsQuery(this._request).fetch(this.id);
  }
}
```

## Connection/Pagination

Follows Relay specification:

```typescript
class Connection<Node> extends PlainConnection<Node> {
  nodes: Node[];
  pageInfo: PageInfo;
  
  async fetchNext(): Promise<Connection<Node>> {
    return this._fetch({ 
      first: 50, 
      after: this.pageInfo.endCursor 
    });
  }
  
  async fetchAll(): Promise<Node[]> {
    // Automatically paginates through all pages
  }
}
```

## Error Handling

Plain's API returns errors in mutation responses:

```typescript
{
  customer?: Customer;
  error?: MutationError;
}
```

The SDK preserves this pattern - check both fields after mutations.

## Type Safety

Full type safety throughout:

1. **Operations**: Typed input variables and return types
2. **Models**: All fields typed, including lazy getters
3. **Connections**: Generic `Connection<T>` with typed nodes
4. **Mutations**: Typed inputs and result unions

## Performance Characteristics

### Lazy Loading Benefits
- **Initial fetch**: ~50-80% faster (only base fields)
- **Total data**: ~30-60% less (fetch what you need)
- **API calls**: More calls, but smaller payloads

### When to Use

✅ **Good for**:
- Exploring data (don't know what you need upfront)
- Large objects with many relations
- Conditional data access
- User-driven navigation

❌ **Not ideal for**:
- Fetching many known relations (use custom query)
- Batch processing (use custom query with specific fields)
- Real-time dashboards (consider caching layer)

## Maintenance

### Updating from Schema Changes

```bash
# 1. Download new schema
curl https://core-api.uk.plain.com/graphql/v1/schema.graphql > packages/sdk/src/schema.graphql

# 2. Regenerate
cd packages/sdk
pnpm run codegen

# 3. Test
pnpm typecheck
pnpm test

# 4. Fix any new errors
# - Update comprehensive-fix.js if needed
# - Add new skipFields to codegen.doc.js
# - Update field aliases in fix script
```

### Schema Compatibility

The SDK handles Plain's schema quirks:

1. **Circular references**: Detected and broken automatically
2. **Field conflicts**: Aliased in post-processing
3. **Missing required args**: Fields skipped during generation
4. **Deep nesting**: Limited to 5 levels

These are encoded in:
- `packages/codegen-doc/src/cycle-detector.ts`
- `packages/sdk/codegen.doc.js` (skipFields config)
- `packages/sdk/comprehensive-fix.js` (post-processing)

## Testing

### Unit Tests
Test individual model classes and operations.

### Integration Tests
Test real API calls with test credentials.

### Type Tests
TypeScript compiler validates all generated types.

## Future Enhancements

Possible improvements:

1. **Eliminate post-processing**: Fix codegen to output correctly first time
2. **Caching layer**: Cache fetched objects by ID
3. **Request batching**: Combine multiple lazy loads into one request
4. **Partial updates**: Update cached objects from mutations
5. **Optimistic updates**: UI updates before API confirms

## Comparison to Other SDKs

### Linear SDK (inspiration)
- ✅ Same lazy loading architecture
- ✅ Same model class pattern
- ➕ Plain adds cycle detection
- ➕ Plain adds more comprehensive fragment coverage

### GraphQL Code Generator (foundation)
- ✅ Uses same plugin system
- ➕ Custom plugins for Plain's patterns
- ➕ Adds lazy loading logic
- ➕ Adds connection helpers

### Plain SDK v5 (predecessor)
- ➖ Eager loading (slow)
- ➖ Manual implementation
- ➕ v6 auto-generated
- ➕ v6 lazy loading
- ➕ v6 better types

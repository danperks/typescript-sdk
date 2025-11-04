# Changelog

## [6.0.0] - 2025-11-04

### 🚀 Major Rewrite - Lazy Loading Architecture

Complete rewrite of the SDK to support lazy loading and gradual graph navigation, matching Linear's SDK architecture.

#### Breaking Changes

- **Lazy loading by default**: All related objects are now fetched on-demand via async getters
- **Method name changes**: `getCustomer()` → `customer()`, etc.
- **All relations are async**: Must await related objects (e.g., `await customer.company`)
- **New pagination API**: Connections now use Relay-style pagination
- **Minimum Node.js**: Now requires Node.js 18+

#### New Features

- ✨ Lazy loading for all model relationships
- 🔄 Automatic pagination with Connection classes
- 📦 Monorepo architecture with custom codegen plugins
- 🎯 600+ model classes with typed lazy getters
- 🔗 832 auto-generated operations from schema
- ⚡ Optimized requests - fetch only what you need

#### Architecture

- Adapted Linear's `@linear/codegen-doc` and `@linear/codegen-sdk` plugins
- Added cycle detection for circular GraphQL references
- Implemented depth limiting for self-referential types
- Auto-generates from GraphQL schema

#### Generated Files

- 595 GraphQL fragments (288KB)
- 832 GraphQL operations
- 53,744 lines of TypeScript types (5MB)
- 34,808 lines of SDK models (1.1MB)

#### Migration

See README for full migration guide. Key changes:

**Before (v5.x)**:
```typescript
const customer = await client.getCustomer({ customerId: 'c_123' });
console.log(customer.company.name); // Already loaded
```

**After (v6.0.0)**:
```typescript
const customer = await client.customer({ customerId: 'c_123' });
const company = await customer.company; // Fetched on demand
console.log(company?.name);
```

#### Internal Changes

- New monorepo structure with pnpm workspaces
- Custom GraphQL codegen plugins in `packages/codegen-doc` and `packages/codegen-sdk`
- Automated schema-to-SDK generation pipeline
- Comprehensive fragment coverage (100% of queryable types)

---

## [5.x] - Previous Versions

See git history for v5.x changelogs. v5.x used eager loading and manual SDK implementation.

### [5.0.0] - Earlier

Previous SDK version with eager loading. All data fetched upfront in deeply nested queries.

---

## Migration Notes

### v5.x → v6.0.0

This is a breaking change. Budget 2-4 hours for migration depending on codebase size.

**Required changes**:
1. Update all client method calls to new names
2. Add `await` for all related object access
3. Update pagination to use Connection API
4. Test all queries work with lazy loading

**Benefits**:
- Better performance (reduced over-fetching)
- Lower API costs
- More flexible data access patterns
- Auto-updates with schema changes

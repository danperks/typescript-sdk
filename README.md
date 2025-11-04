# Plain TypeScript SDK

Official TypeScript SDK for the Plain API with lazy loading and gradual graph navigation.

> **Note**: This is v6.0.0, a complete rewrite featuring lazy loading and Linear-style architecture. See [Migration Guide](#migrating-from-v5x) below.

## Features

- ✨ **Lazy Loading**: Navigate the graph gradually, fetching only what you need
- 🔄 **Automatic Pagination**: Built-in helpers for paginated queries  
- 📘 **Full Type Safety**: Complete TypeScript types for all operations
- 🎯 **Intuitive API**: Clean, promise-based interface
- 🚀 **Auto-Generated**: Stays in sync with Plain's GraphQL schema

## Installation

```bash
npm install @team-plain/typescript-sdk
# or
pnpm add @team-plain/typescript-sdk
# or
yarn add @team-plain/typescript-sdk
```

## Quick Start

```typescript
import { PlainClient } from '@team-plain/typescript-sdk';

const client = new PlainClient({
  apiKey: 'plainApiKey_xxx',
});

// Fetch a customer
const customer = await client.customer({ customerId: 'c_123' });
console.log(customer.fullName); // Access scalar fields immediately

// Lazy load related objects
const company = await customer.company; // Fetches company on demand
console.log(company?.name);

// Navigate deeply with lazy loading
const threads = await customer.assignedThreads; // Fetches when accessed
for await (const thread of threads) {
  const assignee = await thread.assignedToUser;
  console.log(`Thread ${thread.id} assigned to ${assignee?.user?.fullName}`);
}
```

## Lazy Loading Explained

The SDK fetches data on-demand rather than all at once:

```typescript
const thread = await client.thread({ threadId: 't_123' });

// ✓ Available immediately (included in initial query):
console.log(thread.title);
console.log(thread.status);
console.log(thread.createdAt);

// ⏳ Fetched on-demand when accessed (separate API calls):
const customer = await thread.customer; // Loads customer data
const labels = await thread.labels;     // Loads labels
const company = await customer.company; // Chains work too!
```

This means:
- **Better performance**: Only fetch what you need
- **Lower bandwidth**: No over-fetching
- **Flexible**: Navigate the graph at your own pace

## Pagination

Built-in support for Relay-style pagination:

```typescript
// Fetch with pagination
const threadsConnection = await client.threads({ first: 50 });

// Access current page
console.log(threadsConnection.nodes.length);
console.log(threadsConnection.pageInfo.hasNextPage);

// Fetch next page
if (threadsConnection.pageInfo.hasNextPage) {
  const nextPage = await threadsConnection.fetchNext();
}

// Or iterate through all pages
for await (const thread of client.threads()) {
  console.log(thread.title);
}

// Paginate manually
const allThreads = await client.paginate(
  client.threads, 
  { first: 100 }
);
```

## Mutations

```typescript
// Create a customer
const result = await client.upsertCustomer({
  identifier: {
    emailAddress: 'customer@example.com',
  },
  onCreate: {
    fullName: 'Jane Doe',
    email: { email: 'customer@example.com', isVerified: true },
  },
  onUpdate: {},
});

if (result.customer) {
  console.log('Customer created:', result.customer.id);
  
  // Lazy load related data immediately
  const company = await result.customer.company;
  console.log('Company:', company?.name);
}

if (result.error) {
  console.error('Error:', result.error.message);
  console.error('Type:', result.error.type);
}
```

## Configuration

```typescript
const client = new PlainClient({
  apiKey: 'plainApiKey_xxx',
  apiUrl: 'https://core-api.uk.plain.com/graphql/v1', // Optional
});
```

### Regional Endpoints

```typescript
// UK (default)
const ukClient = new PlainClient({ 
  apiKey: 'xxx',
  apiUrl: 'https://core-api.uk.plain.com/graphql/v1' 
});

// US
const usClient = new PlainClient({ 
  apiKey: 'xxx',
  apiUrl: 'https://core-api.us.plain.com/graphql/v1' 
});
```

## Webhooks

The SDK includes webhook verification and parsing utilities:

```typescript
import { parseWebhook } from '@team-plain/typescript-sdk';

// In your webhook handler
app.post('/webhooks/plain', (req, res) => {
  const event = parseWebhook(req.body, req.headers['plain-signature'], webhookSecret);
  
  if (event) {
    switch (event.type) {
      case 'thread.created':
        console.log('New thread:', event.payload.thread.id);
        break;
      case 'customer.updated':
        console.log('Customer updated:', event.payload.customer.id);
        break;
    }
  }
  
  res.sendStatus(200);
});
```

## Migrating from v5.x

v6.0.0 introduces lazy loading as a breaking change.

### Before (v5.x - eager loading)

```typescript
// Everything fetched upfront
const customer = await client.getCustomer({ customerId: 'c_123' });
// customer.company is already loaded (or null)
console.log(customer.company.name); // Direct access
```

### After (v6.0.0 - lazy loading)

```typescript
// Base fields fetched, relations loaded on demand
const customer = await client.customer({ customerId: 'c_123' });
// customer.company is a promise, must be awaited
const company = await customer.company; // Separate fetch
console.log(company?.name);
```

### Migration checklist

1. **Update method names**: `getCustomer` → `customer`, etc.
2. **Await related objects**: All relations are now `async`
3. **Handle nullability**: Use optional chaining (`?.`) for nullable relations
4. **Update pagination**: Use new connection-based pagination
5. **Test thoroughly**: Lazy loading changes data access patterns

## API Reference

### PlainClient

Main client class extending `PlainSdk` with lazy-loading models.

#### Queries

All query methods are available directly on the client:
- `customer({ customerId })`
- `thread({ threadId })`
- `threads({ first?, after? })`
- `workspace()`
- And 600+ more...

#### Mutations

All mutation methods follow the pattern:
- `upsertCustomer(input)`
- `createThread(input)`
- `updateThread(input)`
- And 200+ more...

### Model Classes

Every GraphQL type becomes a class with:
- **Scalar fields**: Direct property access
- **Relations**: Async getters that fetch on demand
- **Type safety**: Full TypeScript support

Example: `Customer` class
```typescript
class Customer {
  id: string;              // Scalar - immediate access
  fullName: string;        // Scalar - immediate access
  email: EmailAddress;     // Object - immediate access
  
  get company(): Promise<Company | undefined>;  // Lazy - fetches on access
  get assignedThreads(): Promise<ThreadConnection>; // Lazy pagination
}
```

### Connection Classes

All `*Connection` types support pagination:

```typescript
class ThreadConnection {
  nodes: Thread[];
  pageInfo: PageInfo;
  
  fetchNext(): Promise<ThreadConnection>;
  fetchAll(): Promise<Thread[]>;
}
```

## Advanced Usage

### Custom GraphQL Queries

For operations not in the SDK:

```typescript
import { gql } from 'graphql-tag';

const customQuery = gql`
  query CustomQuery($id: ID!) {
    customer(customerId: $id) {
      id
      fullName
      email {
        email
        isVerified
      }
    }
  }
`;

const result = await client.client.request(customQuery, { id: 'c_123' });
```

### Error Handling

```typescript
try {
  const customer = await client.customer({ customerId: 'invalid' });
} catch (error) {
  if (error.message.includes('not found')) {
    // Handle not found
  } else {
    // Handle other errors
  }
}
```

### Optimizing Requests

Lazy loading means you control performance:

```typescript
// ❌ Sequential fetches (slow)
const customer = await client.customer({ customerId: 'c_123' });
const company = await customer.company;  // Wait for customer first
const threads = await customer.assignedThreads;  // Then wait for threads

// ✅ Parallel fetches (fast)
const customer = await client.customer({ customerId: 'c_123' });
const [company, threads] = await Promise.all([
  customer.company,
  customer.assignedThreads,
]); // Fetch both simultaneously
```

## Development

### Prerequisites

- Node.js 18+
- pnpm 8+

### Setup

```bash
git clone <repository>
cd typescript-sdk
pnpm install
```

### Code Generation

The SDK is auto-generated from Plain's GraphQL schema:

```bash
# Download latest schema
curl https://core-api.uk.plain.com/graphql/v1/schema.graphql > packages/sdk/src/schema.graphql

# Generate SDK
cd packages/sdk
pnpm run codegen

# This runs:
# 1. codegen:doc - Generates fragments and operations
# 2. codegen:types - Generates TypeScript types
# 3. codegen:sdk - Generates model classes with lazy loading
```

### Testing

```bash
pnpm test        # Run tests
pnpm typecheck   # Type check
pnpm build       # Build for distribution
```

### Architecture

```
packages/
├── codegen-doc/     # GraphQL fragment & operation generator
├── codegen-sdk/     # TypeScript model class generator
└── sdk/             # @team-plain/typescript-sdk
    ├── src/
    │   ├── _generated_documents.graphql  # Generated fragments
    │   ├── _generated_documents.ts       # Generated types
    │   ├── _generated_sdk.ts            # Generated models
    │   ├── client.ts                    # PlainClient wrapper
    │   ├── graphql-client.ts           # GraphQL request handler
    │   └── webhooks/                    # Webhook utilities
    └── README.md
```

The codegen plugins are adapted from [Linear's SDK](https://github.com/linear/linear) with Plain-specific enhancements:
- Cycle detection for circular references
- Depth limiting for self-referential types
- Field aliasing for union conflicts
- Comprehensive fragment generation

## Known Limitations

Due to Plain's schema design, some fields are not available in the SDK:

- `Subscription.customerCardInstanceChanges` - requires `customerId` argument
- `Subscription.threadTimelineChanges` - requires `threadId` argument
- `Subscription.timelineChanges` - requires `customerId` argument
- `Workspace.apiKey` - requires `apiKeyId` argument

These can still be accessed via custom GraphQL queries if needed.

## Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm typecheck` and `pnpm test`
5. Submit a pull request

## License

MIT

## Support

- [Plain Documentation](https://www.plain.com/docs)
- [API Reference](https://www.plain.com/docs/api-reference)
- [GitHub Issues](https://github.com/team-plain/typescript-sdk/issues)

## Acknowledgments

This SDK's architecture is inspired by [Linear's TypeScript SDK](https://github.com/linear/linear), adapted for Plain's GraphQL API with additional features for schema compatibility.

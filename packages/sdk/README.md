# Plain TypeScript SDK

Official TypeScript SDK for the Plain API with lazy loading and gradual graph navigation.

## Features

- ✨ **Lazy Loading**: Navigate the graph gradually, fetching only what you need
- 🔄 **Automatic Pagination**: Built-in helpers for paginated queries
- 📘 **Full Type Safety**: Complete TypeScript types for all operations
- 🎯 **Intuitive API**: Clean, promise-based interface

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

## Lazy Loading

The key feature of this SDK is lazy loading - related objects are fetched only when you access them:

```typescript
const thread = await client.thread({ threadId: 't_123' });

// These are available immediately (part of the initial query):
console.log(thread.title);
console.log(thread.status);
console.log(thread.createdAt);

// These are fetched on-demand when accessed:
const customer = await thread.customer; // Separate API call
const labels = await thread.labels;     // Another API call
const company = await customer.company; // Chains lazily
```

## Pagination

Connections are automatically handled with built-in pagination:

```typescript
// Fetch first page
const threadsConnection = await client.threads({ first: 50 });

// Access nodes
console.log(threadsConnection.nodes.length);

// Fetch next page
if (threadsConnection.pageInfo.hasNextPage) {
  const nextPage = await threadsConnection.fetchNext();
  console.log(nextPage.nodes.length);
}

// Or paginate through all
for await (const thread of client.threads()) {
  console.log(thread.title);
}
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
  
  // Lazy load related data
  const company = await result.customer.company;
}

if (result.error) {
  console.error('Error:', result.error.message);
}
```

## Advanced Usage

### Custom GraphQL Queries

Access the underlying GraphQL client for custom queries:

```typescript
import { PlainClient } from '@team-plain/typescript-sdk';
import { gql } from 'graphql-tag';

const client = new PlainClient({ apiKey: 'xxx' });

const customQuery = gql`
  query CustomQuery($id: ID!) {
    customer(customerId: $id) {
      id
      fullName
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
  console.error('API Error:', error.message);
}
```

## Configuration

```typescript
const client = new PlainClient({
  apiKey: 'plainApiKey_xxx',
  apiUrl: 'https://core-api.uk.plain.com/graphql/v1', // Optional, defaults to UK region
});
```

## Migration from v5.x

v6.0.0 introduces lazy loading and a new architecture. Key changes:

### Before (v5.x - eager loading)
```typescript
const customer = await client.getCustomer({ customerId: 'c_123' });
// Everything fetched upfront, deeply nested
```

### After (v6.0.0 - lazy loading)
```typescript
const customer = await client.customer({ customerId: 'c_123' });
// Base fields fetched, related objects loaded on access
const company = await customer.company; // Fetched when needed
```

## Development

```bash
# Generate code from schema
pnpm codegen

# Run tests
pnpm test

# Type check
pnpm typecheck

# Build
pnpm build
```

## License

MIT

## Support

For issues and questions, visit [Plain's documentation](https://www.plain.com/docs) or contact support.

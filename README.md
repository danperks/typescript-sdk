# Plain TypeScript SDK

The official TypeScript SDK for [Plain](https://plain.com) - a modern customer support platform. This SDK provides a fully typed, auto-generated client for interacting with the Plain GraphQL API.

[![npm version](https://img.shields.io/npm/v/@team-plain/typescript-sdk)](https://www.npmjs.com/package/@team-plain/typescript-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🔒 **Fully Type-Safe** - Auto-generated from Plain's GraphQL schema with complete TypeScript definitions
- 🔄 **Always Up-to-Date** - Automatically regenerated to stay in sync with the latest API changes
- 🚀 **Simple API** - Clean, intuitive interface built on top of GraphQL
- 📦 **Tree-Shakeable** - Import only what you need
- 🎯 **Full API Coverage** - Access all Plain API features through typed methods

## Installation

```bash
npm install @team-plain/typescript-sdk
```

```bash
yarn add @team-plain/typescript-sdk
```

```bash
pnpm add @team-plain/typescript-sdk
```

## Quick Start

```typescript
import { createPlainClient } from '@team-plain/typescript-sdk';

// Initialize the client with your API key
const client = createPlainClient({
  apiKey: 'plainApiKey_xxx'
});

// Start making requests
const customer = await client.customer({
  customerId: 'c_123'
});

console.log(customer.customer?.fullName);
```

## Authentication

Get your API key from your Plain workspace settings.

```typescript
const client = createPlainClient({
  apiKey: process.env.PLAIN_API_KEY!,
  // Optional: Override the API URL (defaults to UK region)
  apiUrl: 'https://core-api.uk.plain.com/graphql/v1',
  // Optional: Add custom headers
  headers: {
    'X-Custom-Header': 'value'
  }
});
```

## Usage Examples

### Working with Customers

```typescript
// Get a single customer
const { customer } = await client.customer({
  customerId: 'c_123'
});

if (customer) {
  console.log(`${customer.fullName} - ${customer.email.email}`);
}

// List customers with pagination
const { customers } = await client.customers({
  first: 50
});

for (const edge of customers.edges) {
  const customer = edge.node;
  console.log(customer.fullName);
}

// Upsert a customer
const { upsertCustomer } = await client.upsertCustomer({
  input: {
    identifier: {
      emailAddress: 'john@example.com'
    },
    onCreate: {
      fullName: 'John Doe',
      email: {
        email: 'john@example.com',
        isVerified: true
      }
    },
    onUpdate: {
      fullName: {
        value: 'John Doe Updated'
      }
    }
  }
});

if (upsertCustomer.error) {
  console.error('Error:', upsertCustomer.error.message);
} else if (upsertCustomer.customer) {
  console.log('Customer upserted:', upsertCustomer.customer.id);
}
```

### Working with Threads

```typescript
// Create a new thread
const { createThread } = await client.createThread({
  input: {
    customerIdentifier: {
      customerId: 'c_123'
    },
    title: 'Need help with billing',
    components: [
      {
        componentText: {
          text: 'I have a question about my invoice.'
        }
      }
    ]
  }
});

if (createThread.error) {
  console.error('Error:', createThread.error.message);
  createThread.error.fields?.forEach(field => {
    console.error(`  ${field.field}: ${field.message}`);
  });
} else if (createThread.thread) {
  console.log('Thread created:', createThread.thread.id);
}

// List threads for a customer
const { threads } = await client.threads({
  filters: { customerIds: ['c_123'] },
  first: 10
});

for (const edge of threads.edges) {
  const thread = edge.node;
  console.log(`${thread.title} - ${thread.status}`);
}

// Get thread details
const { thread } = await client.thread({
  threadId: 'th_123'
});

if (thread) {
  console.log('Status:', thread.status);
  console.log('Priority:', thread.priority);
  console.log('Labels:', thread.labels?.map(l => l.labelType.name).join(', '));
}
```

### Managing Labels

```typescript
// Add labels to a thread
const { addLabels } = await client.addLabels({
  input: {
    threadId: 'th_123',
    labelTypeIds: ['lt_urgent', 'lt_billing']
  }
});

if (addLabels.labels) {
  console.log('Labels added:', addLabels.labels.map(l => l.labelType.name));
}

// Remove labels from a thread
const { removeLabels } = await client.removeLabels({
  input: {
    labelIds: ['label_123', 'label_456']
  }
});
```

### Pagination

The SDK handles GraphQL pagination with cursor-based navigation:

```typescript
// Load first page
const firstPage = await client.threads({ first: 20 });

console.log('Has next page:', firstPage.threads.pageInfo.hasNextPage);
console.log('End cursor:', firstPage.threads.pageInfo.endCursor);

// Load next page
if (firstPage.threads.pageInfo.hasNextPage) {
  const nextPage = await client.threads({
    first: 20,
    after: firstPage.threads.pageInfo.endCursor!
  });

  console.log('Next page items:', nextPage.threads.edges.length);
}
```

### Timeline Entries

```typescript
// Get customer timeline
const { timelineEntries } = await client.timelineEntries({
  customerId: 'c_123',
  first: 10
});

for (const edge of timelineEntries.edges) {
  const entry = edge.node;
  console.log(`${entry.__typename} at ${entry.timestamp.iso8601}`);

  if (entry.llmText) {
    console.log('Content:', entry.llmText);
  }
}
```

### Working with Companies

```typescript
// Get a company
const { company } = await client.company({
  companyId: 'comp_123'
});

if (company) {
  console.log(`${company.name} - ${company.domainName}`);
}

// List companies
const { companies } = await client.companies({ first: 10 });

for (const edge of companies.edges) {
  console.log(edge.node.name);
}
```

## Type Safety

The SDK provides complete type safety with auto-generated TypeScript types via the user of auto generated graphql fragments. You can use these Fragements for arguments throughout your code, to deal with responses.

```typescript
import type {
  CustomerFieldsFragment,
  ThreadFieldsFragment,
  ThreadStatus,
  ThreadPriority
} from '@team-plain/typescript-sdk';

// Use fragment types for type-safe operations
function processCustomer(customer: CustomerFieldsFragment) {
  return {
    id: customer.id,
    name: customer.fullName,
    email: customer.email.email,
    isVerified: customer.email.isVerified,
    createdDate: new Date(customer.createdAt.iso8601)
  };
}

// TypeScript will enforce correct enum values
const status: ThreadStatus = 'TODO'; // ✓ Valid
const priority: ThreadPriority = 2; // ✓ Valid
```

## Error Handling

The SDK follows Plain's error response pattern. Most mutation operations return an error field:

```typescript
const result = await client.createThread({ input: { /* ... */ } });

if (result.createThread.error) {
  // Handle error
  console.error('Error:', result.createThread.error.message);
  console.error('Type:', result.createThread.error.type);

  // Field-specific errors
  result.createThread.error.fields?.forEach(field => {
    console.error(`${field.field}: ${field.message}`);
  });
} else if (result.createThread.thread) {
  // Success case
  console.log('Thread created:', result.createThread.thread.id);
}
```

## Examples

Check out the [examples](./examples) directory for complete working examples:

- [`basic-usage.ts`](./examples/basic-usage.ts) - Common SDK operations and patterns
- [`workspace-customers.ts`](./examples/workspace-customers.ts) - Complete workspace exploration example

To run the examples:

```bash
export PLAIN_API_KEY="plainApiKey_xxx"
npx tsx examples/basic-usage.ts
```

## How It Works

This SDK is auto-generated from Plain's GraphQL schema using [GraphQL Code Generator](https://the-guild.dev/graphql/codegen). The generation process:

1. Fetches the latest GraphQL schema from Plain's API
2. Generates TypeScript types for all GraphQL types
3. Creates typed SDK methods for all queries and mutations
4. Outputs a fully typed client with IntelliSense support

The SDK is kept up-to-date automatically, ensuring you always have access to the latest Plain features.


## Support

- 📚 [Plain Documentation](https://docs.plain.com)
- 💬 [Plain Help](https://plain.support.site/)
- 🐛 [Report Issues](https://github.com/team-plain/typescript-sdk/issues)

## License

MIT © [Plain](https://plain.com)

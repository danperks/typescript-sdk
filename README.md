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

### Expanding Nested Objects

The SDK uses **minimal fragments** to reduce server load. Nested objects only include IDs, which you can then fetch separately:

```typescript
// Fetch a thread - nested objects only have IDs
const { thread } = await client.thread({
  threadId: 'th_123'
});

if (thread) {
  console.log('Thread:', thread.title);
  console.log('Customer ID:', thread.customer?.id); // Only has ID

  // Expand the customer - fetch full details using the ID
  if (thread.customer?.id) {
    const { customer } = await client.customer({
      customerId: thread.customer.id
    });

    if (customer) {
      console.log('Customer name:', customer.fullName);
      console.log('Customer email:', customer.email.email);

      // Expand even further - get the customer's company
      if (customer.company?.id) {
        const { company } = await client.company({
          companyId: customer.company.id
        });

        if (company) {
          console.log('Company:', company.name);
        }
      }
    }
  }

  // Expand labels
  if (thread.labels) {
    for (const labelRef of thread.labels) {
      if (labelRef.id) {
        const { label } = await client.label({
          labelId: labelRef.id
        });

        if (label) {
          console.log('Label:', label.labelType.name);
        }
      }
    }
  }
}
```

**Why minimal fragments?**
- **60-70% smaller queries** - Dramatically reduces GraphQL query size
- **Faster responses** - Server fetches less data upfront
- **Better scalability** - Lower server load per request
- **On-demand loading** - Only fetch nested data when you need it

This approach follows the [Linear SDK pattern](https://github.com/linear/linear) and significantly reduces server load while maintaining full access to all data.

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

## Webhooks

Plain can send webhook events to your application when things happen in your workspace (e.g., new threads, customer updates). The SDK includes full support for verifying webhook signatures and handling events with type safety.

### Quick Start

1. **Get your HMAC secret** from **Settings → Request signing** in Plain
2. **Set up a webhook endpoint** that receives POST requests
3. **Verify signatures** to ensure requests are from Plain
4. **Handle events** with type-safe event types

### Verifying Webhook Signatures

Plain signs all webhook requests with HMAC-SHA256. Always verify signatures before processing webhooks:

```typescript
import { verifyWebhookSignature, type WebhookRequest } from '@team-plain/typescript-sdk';

// Express.js example
app.post('/webhooks/plain', express.raw({ type: 'application/json' }), (req, res) => {
  const signature = req.headers['plain-request-signature'] as string;

  const isValid = verifyWebhookSignature({
    body: req.body, // Must be raw body (Buffer/string)
    signature,
    secret: process.env.PLAIN_HMAC_SECRET!
  });

  if (!isValid) {
    return res.status(403).send('Invalid signature');
  }

  const webhook: WebhookRequest = JSON.parse(req.body.toString());
  // Process webhook...
  res.status(200).send('OK');
});
```

**Important:** You must use the raw request body for signature verification. Use `express.raw()` middleware or similar to preserve the original body.

### Handling Events

The SDK provides the `WebhookRequest` type for type-safe event handling:

```typescript
import type { WebhookRequest } from '@team-plain/typescript-sdk';

function handleWebhook(webhook: WebhookRequest) {
  // webhook.type is typed as a union of all event types
  switch (webhook.type) {
    case 'thread.thread_created':
      console.log('New thread:', webhook.payload.thread.title);
      break;

    case 'customer.customer_created':
      console.log('New customer:', webhook.payload.customer.fullName);
      break;

    case 'thread.email_received':
      console.log('Email from:', webhook.payload.email.from.email);
      break;

    // ... handle other event types
  }
}
```

### Idempotency

Webhooks may be delivered more than once. Use the event ID for idempotency:

```typescript
const eventId = webhook.id; // Same across all delivery attempts

// Check if you've already processed this event
if (await hasProcessedEvent(eventId)) {
  return; // Already processed
}

// Process the webhook...
await processWebhook(webhook);

// Mark as processed
await markEventAsProcessed(eventId);
```

### Supported Webhook Events

The SDK provides types for all 29 Plain webhook events:

- **Thread Events**: `thread.thread_created`, `thread.thread_status_transitioned`, `thread.thread_assignment_transitioned`, `thread.email_received`, `thread.email_sent`, `thread.chat_sent`, `thread.chat_received`, `thread.thread_labels_changed`, `thread.thread_priority_changed`, and more
- **Customer Events**: `customer.customer_created`, `customer.customer_updated`, `customer.customer_deleted`, `customer.customer_changed`
- **Timeline Events**: `timeline.timeline_entry_changed`

### Framework Integration Examples

See [`examples/webhook-verification.ts`](./examples/webhook-verification.ts) for complete integration examples including:

- **Express.js** - Using `express.raw()` middleware
- **Next.js App Router** - Using route handlers
- **Type-safe event handlers** - Organizing webhook processing
- **Testing** - Generating and verifying signatures

### Learn More

- [Plain Webhooks Documentation](https://www.plain.com/docs/webhooks)
- [Request Signing](https://www.plain.com/docs/request-signing)
- [Webhook Events Reference](https://www.plain.com/docs/webhooks#webhook-events)

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
- [`webhook-verification.ts`](./examples/webhook-verification.ts) - Webhook signature verification and event handling

To run the examples:

```bash
export PLAIN_API_KEY="plainApiKey_xxx"
npx tsx examples/basic-usage.ts

# For webhook examples
export PLAIN_HMAC_SECRET="your-hmac-secret"
npx tsx examples/webhook-verification.ts
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

import { PlainSdk } from './_generated_sdk';
import { GraphQLClient } from './graphql-client';
import type { Context } from './context';

/**
 * The Plain Client for interacting with the Plain GraphQL API
 * 
 * Supports lazy loading of nested objects through async getters on model classes.
 * 
 * @example
 * ```typescript
 * const client = new PlainClient({ apiKey: 'xxx' });
 * 
 * // Fetch a customer
 * const customer = await client.customer({ customerId: 'c_123' });
 * 
 * // Lazy load related objects
 * const company = await customer.company;
 * const threads = await customer.assignedThreads;
 * ```
 */
export class PlainClient extends PlainSdk {
  private graphqlClient: GraphQLClient;

  constructor(context: Context) {
    const graphqlClient = new GraphQLClient(context);
    super(graphqlClient.request.bind(graphqlClient));
    this.graphqlClient = graphqlClient;
  }

  /**
   * Get the underlying GraphQL client for advanced use cases
   */
  get client(): GraphQLClient {
    return this.graphqlClient;
  }
}

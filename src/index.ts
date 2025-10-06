import { GraphQLClient } from 'graphql-request';
import { getSdk, type Sdk } from './generated/sdk';

/**
 * Options for creating a Plain SDK client
 */
export interface PlainClientOptions {
  /**
   * Plain API key for authentication
   */
  apiKey: string;

  /**
   * Optional API URL override
   * @default 'https://core-api.uk.plain.com/graphql/v1'
   */
  apiUrl?: string;

  /**
   * Optional custom headers
   */
  headers?: Record<string, string>;
}

/**
 * Create a Plain SDK client with authentication
 *
 * @example
 * ```typescript
 * import { createPlainClient } from '@team-plain/typescript-sdk';
 *
 * const client = createPlainClient({
 *   apiKey: 'plainApiKey_xxx'
 * });
 *
 * // Use any generated SDK method
 * const customer = await client.customer({ customerId: 'c_123' });
 * const threads = await client.threads({ customerId: 'c_123' });
 * ```
 */
export function createPlainClient(options: PlainClientOptions): Sdk {
  if (!options.apiKey) {
    throw new Error('apiKey is required');
  }

  const apiUrl = options.apiUrl ?? 'https://core-api.uk.plain.com/graphql/v1';

  const graphqlClient = new GraphQLClient(apiUrl, {
    headers: {
      Authorization: `Bearer ${options.apiKey}`,
      ...options.headers,
    },
  });

  return getSdk(graphqlClient);
}

// Export all generated types and functions
export * from './generated/sdk';

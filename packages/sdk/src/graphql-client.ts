import type { DocumentNode } from 'graphql';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import type { Context } from './context';

export type GraphQLError = {
  message: string;
  locations?: { line: number; column: number }[];
  path?: (string | number)[];
  extensions?: Record<string, unknown>;
};

export type GraphQLResponse<T> = {
  data?: T;
  errors?: GraphQLError[];
};

export class GraphQLClient {
  private apiUrl: string;
  private apiKey: string;

  constructor(context: Context) {
    this.apiUrl = context.apiUrl || 'https://core-api.uk.plain.com/graphql/v1';
    this.apiKey = context.apiKey;
  }

  async request<TResult, TVariables = Record<string, unknown>>(
    document: DocumentNode | TypedDocumentNode<TResult, TVariables>,
    variables?: TVariables
  ): Promise<TResult> {
    const query = typeof document === 'string' ? document : (document as any).loc?.source?.body || '';

    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result: GraphQLResponse<TResult> = await response.json();

    if (result.errors) {
      throw new Error(result.errors.map(e => e.message).join(', '));
    }

    return result.data!;
  }
}

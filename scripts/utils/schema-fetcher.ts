import {
  type GraphQLField,
  type GraphQLNamedType,
  type GraphQLObjectType,
  type GraphQLSchema,
  buildClientSchema,
  buildSchema,
  getIntrospectionQuery,
  isObjectType,
} from 'graphql';
import type { IntrospectedSchema } from './types';

export async function fetchSchema(schemaUrl: string): Promise<GraphQLSchema> {
  // Try fetching as a schema.graphql file first (public endpoint)
  if (schemaUrl.endsWith('.graphql')) {
    const response = await fetch(schemaUrl, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch schema: ${response.status} ${response.statusText}`);
    }

    const schemaString = await response.text();
    return buildSchema(schemaString);
  }

  // Fall back to introspection query (requires auth)
  const response = await fetch(schemaUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getIntrospectionQuery(),
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch schema: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();

  if (result.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
  }

  return buildClientSchema(result.data);
}

export async function introspectSchema(schemaUrl: string): Promise<IntrospectedSchema> {
  const schema = await fetchSchema(schemaUrl);

  const queryType = schema.getQueryType();
  const mutationType = schema.getMutationType();

  const queries: GraphQLField<unknown, unknown>[] = [];
  const mutations: GraphQLField<unknown, unknown>[] = [];

  if (queryType) {
    const fields = queryType.getFields();
    queries.push(...Object.values(fields));
  }

  if (mutationType) {
    const fields = mutationType.getFields();
    mutations.push(...Object.values(fields));
  }

  const typeMap = schema.getTypeMap();
  const types = new Map<string, GraphQLNamedType>();

  for (const [name, type] of Object.entries(typeMap)) {
    // Skip internal GraphQL types
    if (!name.startsWith('__')) {
      types.set(name, type);
    }
  }

  return {
    schema,
    queries,
    mutations,
    types,
  };
}

export function isConnectionType(type: GraphQLNamedType): boolean {
  return type.name.endsWith('Connection');
}

export function isEdgeType(type: GraphQLNamedType): boolean {
  return type.name.endsWith('Edge');
}

export function isPageInfoType(type: GraphQLNamedType): boolean {
  return type.name === 'PageInfo';
}

export function shouldSkipType(typeName: string, excludeTypes: string[]): boolean {
  if (excludeTypes.includes(typeName)) {
    return true;
  }

  // Skip by pattern
  if (excludeTypes.some((pattern) => typeName.endsWith(pattern))) {
    return true;
  }

  return false;
}


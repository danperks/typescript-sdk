import type {
  GraphQLField,
  GraphQLInputObjectType,
  GraphQLNamedType,
  GraphQLObjectType,
  GraphQLOutputType,
  GraphQLSchema,
} from 'graphql';

export interface SDKConfig {
  fragmentDefaults: {
    includeScalars: boolean;
    includeEnums: boolean;
    maxDepth: number;
    perTypeDepth?: Record<string, number>;
    excludeTypes: string[];
  };
  operations: {
    skipOperations: string[];
    customUnwrappers: Record<string, string>;
  };
}

export interface IntrospectedSchema {
  schema: GraphQLSchema;
  queries: GraphQLField<unknown, unknown>[];
  mutations: GraphQLField<unknown, unknown>[];
  types: Map<string, GraphQLNamedType>;
}

export interface GeneratedFragment {
  typeName: string;
  fragmentName: string;
  content: string;
  fields: string[];
}

export interface GeneratedOperation {
  name: string;
  type: 'query' | 'mutation';
  content: string;
  returnType: GraphQLOutputType;
  inputType?: GraphQLInputObjectType;
}

export interface GeneratedMethod {
  name: string;
  operationName: string;
  type: 'query' | 'mutation';
  content: string;
  jsDoc: string;
  returnType: string;
}

export interface TypeInfo {
  name: string;
  isScalar: boolean;
  isEnum: boolean;
  isObject: boolean;
  isList: boolean;
  isNonNull: boolean;
  ofType?: TypeInfo;
}


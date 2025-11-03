import type { GraphQLField, GraphQLObjectType } from 'graphql';
import {
  isListType,
  isNonNullType,
  isObjectType,
  isScalarType,
  isEnumType,
} from 'graphql';
import type { GeneratedMethod, GeneratedOperation } from './types';

function unwrapType(type: any): any {
  if (isNonNullType(type) || isListType(type)) {
    return unwrapType(type.ofType);
  }
  return type;
}

function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getDocumentName(operationName: string): string {
  // Handle special case normalization from graphql-codegen
  // MSTeams becomes MsTeams in generated types
  const normalized = operationName.replace(/MSTeams/g, 'MsTeams');
  return `${capitalizeFirst(normalized)}Document`;
}

function generateMethodName(operationName: string, operationType: 'query' | 'mutation'): string {
  // For queries, prefix with 'get' if not already present
  if (operationType === 'query') {
    if (operationName.startsWith('get') || operationName.startsWith('search')) {
      return operationName;
    }
    if (operationName.startsWith('my')) {
      // myWorkspace -> getMyWorkspace
      return `get${capitalizeFirst(operationName)}`;
    }
    // customer -> getCustomer
    return `get${capitalizeFirst(operationName)}`;
  }

  // For mutations, use as-is (they typically start with verbs like create, update, delete)
  return operationName;
}

function generateJsDoc(
  operation: GraphQLField<unknown, unknown>,
  methodName: string
): string {
  const description = operation.description || `${methodName.replace(/([A-Z])/g, ' $1').trim()}`;
  
  let doc = `/**\n   * ${description}`;
  
  if (operation.deprecationReason) {
    doc += `\n   * @deprecated ${operation.deprecationReason}`;
  }
  
  doc += '\n   */';
  
  return doc;
}

function analyzeReturnType(operation: GraphQLField<unknown, unknown>): {
  unwrapper: string;
  returnTypeString: string;
} {
  const returnType = unwrapType(operation.type);

  if (!isObjectType(returnType)) {
    return {
      unwrapper: 'return res;',
      returnTypeString: 'unknown',
    };
  }

  const fields = returnType.getFields();
  const fieldNames = Object.keys(fields);

  // Check for pagination pattern
  if (fieldNames.includes('edges') && fieldNames.includes('pageInfo')) {
    const edgesField = fields.edges;
    const edgesType = unwrapType(edgesField.type);
    const documentName = getDocumentName(operation.name);
    
    if (isObjectType(edgesType)) {
      const nodeField = edgesType.getFields().node;
      if (nodeField) {
        const nodeType = unwrapType(nodeField.type);
        const fragmentName = `${nodeType.name}PartsFragment`;
        
        // Use ResultOf to extract the exact node type (handles unions, etc.)
        const nodeTypeString = `ResultOf<typeof ${documentName}>['${operation.name}']['edges'][number]['node']`;
        
        // Check if totalCount exists
        if (fieldNames.includes('totalCount')) {
          return {
            unwrapper: `return unwrapData(res, (q) => ({
      ${operation.name}: q.${operation.name}.edges.map((edge) => edge.node),
      pageInfo: q.${operation.name}.pageInfo,
      totalCount: q.${operation.name}.totalCount,
    }));`,
            returnTypeString: `{
    ${operation.name}: ${nodeTypeString}[];
    pageInfo: PageInfoPartsFragment;
    totalCount: number;
  }`,
          };
        }

        return {
          unwrapper: `return unwrapData(res, (q) => ({
      ${operation.name}: q.${operation.name}.edges.map((edge) => edge.node),
      pageInfo: q.${operation.name}.pageInfo,
    }));`,
          returnTypeString: `{
    ${operation.name}: ${nodeTypeString}[];
    pageInfo: PageInfoPartsFragment;
  }`,
        };
      }
    }
  }

  // Check for mutation pattern (has error field)
  if (fieldNames.includes('error')) {
    // Find the main data field (usually the first non-error field)
    const dataFieldName = fieldNames.find(
      (name) => name !== 'error' && name !== '__typename'
    );

    if (dataFieldName) {
      const dataField = fields[dataFieldName];
      const dataType = unwrapType(dataField.type);
      const isNullable = !isNonNullType(dataField.type);
      const documentName = getDocumentName(operation.name);

      // Use ResultOf to extract the exact type from the generated document
      // This handles cases where fragments don't exist (e.g., Output types)
      if (isObjectType(dataType) || isListType(dataField.type)) {
        return {
          unwrapper: `return unwrapData(res, (q) => q.${operation.name}.${dataFieldName});`,
          returnTypeString: `ResultOf<typeof ${documentName}>['${operation.name}']['${dataFieldName}']`,
        };
      } else if (isScalarType(dataType) || isEnumType(dataType)) {
        // For scalars, map to TypeScript types and handle nullability
        const tsType = mapScalarToTsType(dataType.name);
        const returnType = isNullable ? `${tsType} | null` : tsType;
        return {
          unwrapper: `return unwrapData(res, (q) => q.${operation.name}.${dataFieldName});`,
          returnTypeString: returnType,
        };
      }
    }

    // If no clear data field, return null
    return {
      unwrapper: `return unwrapData(res, () => null);`,
      returnTypeString: 'null',
    };
  }

  // Simple query - use ResultOf to extract type
  const documentName = getDocumentName(operation.name);
  return {
    unwrapper: `return unwrapData(res, (q) => q.${operation.name});`,
    returnTypeString: `ResultOf<typeof ${documentName}>['${operation.name}']`,
  };
}

function mapScalarToTsType(scalarName: string): string {
  switch (scalarName) {
    case 'String':
      return 'string';
    case 'Int':
    case 'Float':
      return 'number';
    case 'Boolean':
      return 'boolean';
    case 'ID':
      return 'string';
    default:
      // For custom scalars, return the GraphQL type name
      return scalarName;
  }
}

function generateMethodSignature(
  operation: GraphQLField<unknown, unknown>,
  methodName: string,
  returnTypeString: string
): string {
  const documentName = getDocumentName(operation.name);

  // Check if operation has a single 'input' argument (common pattern)
  const hasInputArg = operation.args.length === 1 && operation.args[0].name === 'input';

  if (hasInputArg) {
    return `async ${methodName}(
    input: VariablesOf<typeof ${documentName}>['input']
  ): SDKResult<${returnTypeString}>`;
  }

  if (operation.args.length > 0) {
    return `async ${methodName}(
    variables: VariablesOf<typeof ${documentName}>
  ): SDKResult<${returnTypeString}>`;
  }

  // No arguments
  return `async ${methodName}(): SDKResult<${returnTypeString}>`;
}

export function generateClientMethod(
  operation: GraphQLField<unknown, unknown>,
  operationType: 'query' | 'mutation'
): GeneratedMethod {
  const methodName = generateMethodName(operation.name, operationType);
  const documentName = getDocumentName(operation.name);
  const jsDoc = generateJsDoc(operation, methodName);
  const { unwrapper, returnTypeString } = analyzeReturnType(operation);

  const hasInputArg = operation.args.length === 1 && operation.args[0].name === 'input';
  const hasArgs = operation.args.length > 0;

  let variablesLine = '';
  if (hasInputArg) {
    variablesLine = 'variables: { input },';
  } else if (hasArgs) {
    variablesLine = 'variables,';
  }

  const signature = generateMethodSignature(operation, methodName, returnTypeString);

  const content = `${jsDoc}
  ${signature} {
    const res = await request(this.#ctx, {
      query: ${documentName},
      ${variablesLine}
    });

    ${unwrapper}
  }`;

  return {
    name: methodName,
    operationName: operation.name,
    type: operationType,
    content,
    jsDoc,
    returnType: returnTypeString,
  };
}

export function generateClientClass(methods: GeneratedMethod[]): string {
  const imports = new Set<string>();
  const documentNames = new Set<string>();
  const fragmentTypes = new Set<string>();

  // Collect all document names and fragment types for imports
  for (const method of methods) {
    const documentName = getDocumentName(method.operationName);
    documentNames.add(documentName);
    
    // Extract fragment type references from return type string
    // Matches patterns like: SomeTypePartsFragment
    const fragmentMatches = method.returnType.match(/\w+PartsFragment/g);
    if (fragmentMatches) {
      for (const fragmentType of fragmentMatches) {
        // Normalize MSTeams -> MsTeams to match graphql-codegen's output
        const normalized = fragmentType.replace(/MSTeams/g, 'MsTeams');
        fragmentTypes.add(normalized);
      }
    }
    
    // Extract enum/scalar type references (e.g., UpsertResult)
    // Look for TypeScript type names that are capitalized and not primitive types
    const enumMatches = method.returnType.match(/\b[A-Z][A-Za-z0-9]*(?!PartsFragment|Document)\b/g);
    if (enumMatches) {
      for (const enumType of enumMatches) {
        // Skip common non-imported types and Document names
        if (['SDKResult', 'Result', 'String', 'ResultOf', 'typeof'].includes(enumType) || 
            enumType.endsWith('Document')) {
          continue;
        }
        // These are likely enums or custom scalars that need to be imported
        fragmentTypes.add(enumType);
      }
    }
  }

  // Always include PageInfoPartsFragment
  fragmentTypes.add('PageInfoPartsFragment');

  const methodsContent = methods.map((m) => m.content).join('\n\n  ');

  return `/* THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. */

import type { VariablesOf, ResultOf } from '@graphql-typed-document-node/core';
import type { Context } from './context';
import type { PlainSDKError } from './error';
import {
  ${Array.from(documentNames).sort().join(',\n  ')},
  type ${Array.from(fragmentTypes).sort().join(',\n  type ')},
} from './graphql/types';
import { request } from './request';
import type { Result } from './result';

type SDKResult<T> = Promise<Result<T, PlainSDKError>>;

function nonNullable<T>(x: T | null | undefined): T {
  if (x === null || x === undefined) {
    throw new Error('Expected value to be non nullable');
  }
  return x;
}

function unwrapData<T, X>(
  result: Result<T, PlainSDKError>,
  unwrapFn: (data: T) => X
): Result<X, PlainSDKError> {
  if (result.error) {
    return { error: result.error };
  }
  return { data: unwrapFn(result.data) };
}

export class PlainClientGenerated {
  #ctx: Context;

  constructor(ctx: Context) {
    this.#ctx = ctx;
  }

  ${methodsContent}
}
`;
}


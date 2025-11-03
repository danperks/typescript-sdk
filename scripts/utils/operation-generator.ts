import {
  type GraphQLField,
  type GraphQLInputObjectType,
  type GraphQLNamedType,
  type GraphQLOutputType,
  isListType,
  isNonNullType,
  isObjectType,
  isScalarType,
  isEnumType,
  isInputObjectType,
  isInterfaceType,
  isUnionType,
} from 'graphql';
import type { GeneratedFragment, GeneratedOperation } from './types';

function unwrapType(type: GraphQLOutputType): GraphQLNamedType {
  if (isNonNullType(type) || isListType(type)) {
    return unwrapType(type.ofType);
  }
  return type;
}

function getFragmentsUsed(
  type: GraphQLOutputType,
  availableFragments: Map<string, GeneratedFragment>,
  visited: Set<string> = new Set()
): Set<string> {
  const fragments = new Set<string>();
  const namedType = unwrapType(type);

  if (visited.has(namedType.name)) {
    return fragments;
  }
  visited.add(namedType.name);

  if (isObjectType(namedType)) {
    const fragment = availableFragments.get(namedType.name);
    if (fragment) {
      fragments.add(fragment.fragmentName);
    }

    // Check nested fields
    const fields = namedType.getFields();
    for (const field of Object.values(fields)) {
      if (field.args.length === 0) {
        const nestedFragments = getFragmentsUsed(field.type, availableFragments, visited);
        nestedFragments.forEach((f) => fragments.add(f));
      }
    }
  }

  return fragments;
}

function buildSelectionSet(
  type: GraphQLOutputType,
  availableFragments: Map<string, GeneratedFragment>,
  fieldName: string,
  depth: number = 0,
  indent: string = '      '
): string {
  const namedType = unwrapType(type);

  if (isScalarType(namedType) || isEnumType(namedType)) {
    return fieldName;
  }

  // Handle unions - just include __typename
  if (isUnionType(namedType)) {
    return `${fieldName} {\n${indent}__typename\n${indent.slice(0, -2)}}`;
  }

  // Handle interfaces and objects
  if (isObjectType(namedType) || isInterfaceType(namedType)) {
    const fragment = availableFragments.get(namedType.name);
    if (fragment) {
      return `${fieldName} {\n${indent}...${fragment.fragmentName}\n${indent.slice(0, -2)}}`;
    }

    // No fragment available - build minimal inline selection
    const fields = isObjectType(namedType) ? namedType.getFields() : isInterfaceType(namedType) ? namedType.getFields() : {};
    
    // Find simple scalar/enum fields we can include (no recursion to avoid infinite loops)
    const simpleFields: string[] = ['__typename'];
    for (const [fname, field] of Object.entries(fields)) {
      if (field.args.length === 0) {
        const fieldType = unwrapType(field.type);
        if (isScalarType(fieldType) || isEnumType(fieldType)) {
          simpleFields.push(fname);
        }
      }
    }

    if (simpleFields.length > 1) {
      const fieldList = simpleFields.join(`\n${indent}`);
      return `${fieldName} {\n${indent}${fieldList}\n${indent.slice(0, -2)}}`;
    }

    // Last resort: just __typename
    return `${fieldName} {\n${indent}__typename\n${indent.slice(0, -2)}}`;
  }

  return fieldName;
}

function generateOperationContent(
  operation: GraphQLField<unknown, unknown>,
  operationType: 'query' | 'mutation',
  availableFragments: Map<string, GeneratedFragment>
): string {
  const operationName = operation.name;
  const returnType = operation.type;

  // Build variables
  const variables: string[] = [];
  for (const arg of operation.args) {
    const argType = arg.type.toString();
    variables.push(`$${arg.name}: ${argType}`);
  }

  const variablesStr = variables.length > 0 ? `(${variables.join(', ')})` : '';

  // Build arguments
  const args: string[] = [];
  for (const arg of operation.args) {
    args.push(`${arg.name}: $${arg.name}`);
  }

  const argsStr = args.length > 0 ? `(${args.join(', ')})` : '';

  // Build selection set
  const returnTypeNamed = unwrapType(returnType);

  let selectionSet = '';
  if (isObjectType(returnTypeNamed) || isInterfaceType(returnTypeNamed) || isUnionType(returnTypeNamed)) {
    // Check if there's a fragment for the return type itself
    const returnTypeFragment = availableFragments.get(returnTypeNamed.name);
    
    if (returnTypeFragment) {
      // Direct return of a type with a fragment
      selectionSet = `{\n    ...${returnTypeFragment.fragmentName}\n  }`;
    } else if (isUnionType(returnTypeNamed)) {
      // Union types need __typename at minimum
      selectionSet = `{\n    __typename\n  }`;
    } else {
      // Build selection set from the output type's fields
      const fields = returnTypeNamed.getFields();
      const selections: string[] = ['__typename'];

      for (const [fieldName, field] of Object.entries(fields)) {
        // Skip fields that require arguments
        if (field.args.length > 0) {
          continue;
        }
        
        const fieldType = unwrapType(field.type);
        // Only include scalar/enum fields for types without fragments
        if (isScalarType(fieldType) || isEnumType(fieldType)) {
          selections.push(fieldName);
        } else if (availableFragments.has(fieldType.name)) {
          // Has a fragment, include it
          selections.push(buildSelectionSet(field.type, availableFragments, fieldName, 1, '    '));
        } else {
          // Nested object without fragment - include with minimal selection
          selections.push(buildSelectionSet(field.type, availableFragments, fieldName, 1, '    '));
        }
      }

      selectionSet = `{\n    ${selections.join('\n    ')}\n  }`;
    }
  }

  const content = `${operationType} ${operationName}${variablesStr} {
  ${operationName}${argsStr} ${selectionSet}
}`;

  return content;
}

export function generateOperation(
  operation: GraphQLField<unknown, unknown>,
  operationType: 'query' | 'mutation',
  availableFragments: Map<string, GeneratedFragment>
): GeneratedOperation {
  const content = generateOperationContent(operation, operationType, availableFragments);

  return {
    name: operation.name,
    type: operationType,
    content,
    returnType: operation.type,
    inputType: operation.args.length > 0 && isInputObjectType(operation.args[0].type)
      ? (operation.args[0].type as GraphQLInputObjectType)
      : undefined,
  };
}

export function formatOperationFileName(operationName: string): string {
  // Convert to camelCase if not already
  const camelCase = operationName.charAt(0).toLowerCase() + operationName.slice(1);
  return `${camelCase}.gql`;
}

export function getFragmentsForOperation(
  operation: GeneratedOperation,
  availableFragments: Map<string, GeneratedFragment>
): string[] {
  const fragments = getFragmentsUsed(operation.returnType, availableFragments);
  return Array.from(fragments);
}


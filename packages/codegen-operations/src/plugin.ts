import { PluginFunction } from '@graphql-codegen/plugin-helpers';

export interface OperationsPluginConfig {
  /**
   * Maximum depth for nested fields in fragments
   * @default 3
   */
  maxDepth?: number;

  /**
   * Types to skip when generating fragments
   * @default ['PageInfo', 'Query', 'Mutation', 'Subscription']
   */
  skipTypes?: string[];

  /**
   * Whether to generate queries
   * @default true
   */
  generateQueries?: boolean;

  /**
   * Whether to generate mutations
   * @default true
   */
  generateMutations?: boolean;
}

const DEFAULT_SKIP_TYPES = ['PageInfo', 'Query', 'Mutation', 'Subscription', 'Node'];
const SCALAR_TYPES = ['String', 'Int', 'Float', 'Boolean', 'ID', 'DateTime', 'EmailAddress'];

// Types that should not have fragments generated (unions, interfaces, etc.)
const SKIP_FRAGMENT_GENERATION = new Set<string>();

/**
 * Plugin to auto-generate GraphQL operations and fragments from schema
 */
export const plugin: PluginFunction<OperationsPluginConfig> = (
  schema,
  _documents,
  config: OperationsPluginConfig
) => {
  const maxDepth = config.maxDepth ?? 3;
  const skipTypes = [...DEFAULT_SKIP_TYPES, ...(config.skipTypes || [])];
  const generateQueries = config.generateQueries !== false;
  const generateMutations = config.generateMutations !== false;

  const typeMap = schema.getTypeMap();
  const queryType = schema.getQueryType();
  const mutationType = schema.getMutationType();

  // Collect union types for special handling
  const unionTypes = new Map<string, string[]>();
  for (const [typeName, type] of Object.entries(typeMap)) {
    if (type.astNode?.kind === 'UnionTypeDefinition') {
      const unionDef = type.astNode;
      const members = unionDef.types?.map((t: any) => t.name.value) || [];
      unionTypes.set(typeName, members);
    }
  }

  // Generate fragments for object and interface types
  const fragments: string[] = [];
  const processedTypes = new Set<string>();
  const fragmentDependencies = new Map<string, Set<string>>();

  for (const [typeName, type] of Object.entries(typeMap)) {
    // Skip internal types, scalars, enums, and specified types
    if (
      typeName.startsWith('__') ||
      skipTypes.includes(typeName) ||
      !type.astNode ||
      (type.astNode.kind !== 'ObjectTypeDefinition' && type.astNode.kind !== 'InterfaceTypeDefinition')
    ) {
      continue;
    }

    const fragment = generateFragment(
      type as any,
      schema,
      maxDepth,
      processedTypes,
      skipTypes,
      fragmentDependencies,
      0,
      new Set()
    );
    if (fragment) {
      fragments.push(fragment);
    }
  }

  // Generate minimal union fragments with just __typename
  for (const [unionName, members] of unionTypes.entries()) {
    // Skip if union is in skipTypes
    if (skipTypes.includes(unionName)) {
      continue;
    }

    // Only generate if members exist
    const validMembers = members.filter(member =>
      !skipTypes.includes(member) &&
      !member.startsWith('__')
    );

    if (validMembers.length > 0) {
      // Generate minimal union fragment with just __typename and id (if available)
      const inlineFragments = validMembers
        .map(member => {
          const memberType = schema.getType(member) as any;
          const hasIdField = memberType && typeof memberType.getFields === 'function' &&
            memberType.getFields().id;

          if (hasIdField) {
            return `  ... on ${member} {
    __typename
    id
  }`;
          } else {
            return `  ... on ${member} {
    __typename
  }`;
          }
        })
        .join('\n');

      const unionFragment = `fragment ${unionName}Fields on ${unionName} {
${inlineFragments}
}`;
      fragments.push(unionFragment);
    }
  }

  // Generate queries
  const queries: string[] = [];
  if (generateQueries && queryType) {
    const queryFields = queryType.getFields();
    for (const [fieldName, field] of Object.entries(queryFields)) {
      const query = generateQuery(fieldName, field, schema, skipTypes);
      if (query) {
        queries.push(query);
      }
    }
  }

  // Generate mutations
  const mutations: string[] = [];
  if (generateMutations && mutationType) {
    const mutationFields = mutationType.getFields();
    for (const [fieldName, field] of Object.entries(mutationFields)) {
      const mutation = generateMutation(fieldName, field, schema, skipTypes);
      if (mutation) {
        mutations.push(mutation);
      }
    }
  }

  const output = `# Auto-generated fragments
${fragments.join('\n\n')}

# Auto-generated queries
${queries.join('\n\n')}

# Auto-generated mutations
${mutations.join('\n\n')}
`;

  return {
    content: output,
  };
};

function generateFragment(
  type: any,
  schema: any,
  maxDepth: number,
  processedTypes: Set<string>,
  skipTypes: string[],
  fragmentDependencies: Map<string, Set<string>>,
  currentDepth = 0,
  ancestorTypes: Set<string> = new Set()
): string | null {
  const typeName = type.name;

  // Check for circular reference in current path
  if (ancestorTypes.has(typeName)) {
    return null;
  }

  if (processedTypes.has(typeName) || currentDepth > maxDepth) {
    return null;
  }

  processedTypes.add(typeName);

  // Add current type to ancestor chain
  const currentAncestors = new Set(ancestorTypes);
  currentAncestors.add(typeName);

  const fields = type.getFields();
  const fieldStrings: string[] = [];
  const dependencies = new Set<string>();

  for (const [fieldName, field] of Object.entries(fields)) {
    const fieldObj = field as any;

    // Skip deprecated fields to avoid conflicts
    if (fieldObj.deprecationReason) {
      continue;
    }

    // Skip fields with required arguments (can't include in fragments without args)
    const hasRequiredArgs = fieldObj.args?.some((arg: any) => {
      const argType = arg.type.toString();
      return argType.endsWith('!');
    });

    if (hasRequiredArgs) {
      continue;
    }

    const fieldType = getNamedType(fieldObj.type);
    const fieldTypeName = fieldType.name;

    // Skip if field returns a skip type
    if (skipTypes.includes(fieldTypeName)) {
      continue;
    }

    // Check if it's a scalar or enum using astNode or constructor name
    const isScalar = SCALAR_TYPES.includes(fieldTypeName) ||
                     fieldType.astNode?.kind === 'ScalarTypeDefinition' ||
                     fieldType.astNode?.kind === 'EnumTypeDefinition';

    if (isScalar) {
      // Handle custom types that need subfield selection
      if (['DateTime', 'EmailAddress'].includes(fieldTypeName)) {
        if (fieldTypeName === 'DateTime') {
          fieldStrings.push(`  ${fieldName} {
    iso8601
    unixTimestamp
  }`);
        } else if (fieldTypeName === 'EmailAddress') {
          fieldStrings.push(`  ${fieldName} {
    email
    isVerified
  }`);
        }
      } else {
        fieldStrings.push(`  ${fieldName}`);
      }
      continue;
    }

    // Handle object types using astNode check
    if (fieldType.astNode?.kind === 'ObjectTypeDefinition') {
      // Check for circular dependency in ancestor chain
      if (currentAncestors.has(fieldTypeName)) {
        // Would create a cycle, skip to avoid infinite loop
        continue;
      }

      // Check if it's a connection type - ONLY include id for lazy loading
      if (fieldTypeName.endsWith('Connection')) {
        // Skip connections entirely - they will be fetched via getters
        continue;
      } else if (fieldTypeName.endsWith('Edge')) {
        // Skip edge types, handled in connections
        continue;
      } else if (skipTypes.includes(fieldTypeName)) {
        // Skip fields that reference skipped types
        continue;
      } else {
        // For nested objects, check if there's a query to fetch it
        const queryType = schema.getQueryType();
        const hasQuery = queryType ? Object.keys(queryType.getFields()).some(key => {
          const queryField = queryType.getFields()[key];
          const queryReturnType = getNamedType(queryField.type);
          return queryReturnType.name === fieldTypeName;
        }) : false;

        const nestedType = schema.getType(fieldTypeName);
        const hasIdField = nestedType && typeof nestedType.getFields === 'function' &&
          nestedType.getFields().id;

        if (hasQuery && hasIdField) {
          // Has query available - only store ID for lazy loading
          fieldStrings.push(`  ${fieldName} {
    id
  }`);
        } else if (!hasQuery) {
          // No query available - inline all scalar fields
          const nestedFragment = generateInlineFragment(
            nestedType as any,
            schema,
            skipTypes,
            currentAncestors
          );
          if (nestedFragment) {
            fieldStrings.push(`  ${fieldName} ${nestedFragment}`);
          }
        }
        // If has query but no id field, skip it
      }
    }

    // Handle union types - only include __typename for minimal fragments
    if (fieldType.astNode?.kind === 'UnionTypeDefinition') {
      // Skip if union is in skipTypes
      if (!skipTypes.includes(fieldTypeName)) {
        fieldStrings.push(`  ${fieldName} {
    __typename
  }`);
      }
      continue;
    }

    // Handle interface types - only include __typename for minimal fragments
    if (fieldType.astNode?.kind === 'InterfaceTypeDefinition') {
      fieldStrings.push(`  ${fieldName} {
    __typename
  }`);
      continue;
    }
  }

  fragmentDependencies.set(typeName, dependencies);

  // If no fields were added (all deprecated or skipped), generate a minimal fragment with __typename
  if (fieldStrings.length === 0) {
    return `fragment ${typeName}Fields on ${typeName} {
  __typename
}`;
  }

  return `fragment ${typeName}Fields on ${typeName} {
${fieldStrings.join('\n')}
}`;
}

/**
 * Generate inline fragment for objects without queries
 * Includes scalar fields and recursively inlines nested objects without queries
 */
function generateInlineFragment(
  type: any,
  schema: any,
  skipTypes: string[],
  ancestorTypes: Set<string>
): string | null {
  if (!type || typeof type.getFields !== 'function') {
    return null;
  }

  const fields = type.getFields();
  const fieldStrings: string[] = [];

  for (const [fieldName, field] of Object.entries(fields)) {
    const fieldObj = field as any;

    // Skip deprecated fields
    if (fieldObj.deprecationReason) {
      continue;
    }

    // Skip fields with required arguments
    const hasRequiredArgs = fieldObj.args?.some((arg: any) => {
      const argType = arg.type.toString();
      return argType.endsWith('!');
    });

    if (hasRequiredArgs) {
      continue;
    }

    const fieldType = getNamedType(fieldObj.type);
    const fieldTypeName = fieldType.name;

    // Skip if field returns a skip type
    if (skipTypes.includes(fieldTypeName)) {
      continue;
    }

    // Check if it's a scalar or enum
    const isScalar = SCALAR_TYPES.includes(fieldTypeName) ||
                     fieldType.astNode?.kind === 'ScalarTypeDefinition' ||
                     fieldType.astNode?.kind === 'EnumTypeDefinition';

    if (isScalar) {
      // Handle custom types that need subfield selection
      if (['DateTime', 'EmailAddress'].includes(fieldTypeName)) {
        if (fieldTypeName === 'DateTime') {
          fieldStrings.push(`    ${fieldName} {
      iso8601
      unixTimestamp
    }`);
        } else if (fieldTypeName === 'EmailAddress') {
          fieldStrings.push(`    ${fieldName} {
      email
      isVerified
    }`);
        }
      } else {
        fieldStrings.push(`    ${fieldName}`);
      }
    } else if (fieldType.astNode?.kind === 'ObjectTypeDefinition') {
      // Check for circular reference
      if (ancestorTypes.has(fieldTypeName)) {
        continue;
      }

      // Skip connection and edge types
      if (fieldTypeName.endsWith('Connection') || fieldTypeName.endsWith('Edge')) {
        continue;
      }

      // Check if there's a query to fetch this nested object
      const queryType = schema.getQueryType();
      const hasQuery = queryType ? Object.keys(queryType.getFields()).some(key => {
        const queryField = queryType.getFields()[key];
        const queryReturnType = getNamedType(queryField.type);
        return queryReturnType.name === fieldTypeName;
      }) : false;

      const nestedType = schema.getType(fieldTypeName);
      const hasIdField = nestedType && typeof nestedType.getFields === 'function' &&
        nestedType.getFields().id;

      if (hasQuery && hasIdField) {
        // Has query available - only store ID for lazy loading
        fieldStrings.push(`    ${fieldName} {
      id
    }`);
      } else if (!hasQuery) {
        // No query available - recursively inline this nested object
        const updatedAncestors = new Set(ancestorTypes);
        updatedAncestors.add(type.name);
        const nestedFragment = generateInlineFragment(
          nestedType as any,
          schema,
          skipTypes,
          updatedAncestors
        );
        if (nestedFragment) {
          fieldStrings.push(`    ${fieldName} ${nestedFragment}`);
        }
      }
    }
  }

  if (fieldStrings.length === 0) {
    return `{
    __typename
  }`;
  }

  return `{
${fieldStrings.join('\n')}
  }`;
}

function generateQuery(
  fieldName: string,
  field: any,
  schema: any,
  skipTypes: string[]
): string | null {
  const returnType = getNamedType(field.type);
  const returnTypeName = returnType.name;

  // Skip if returns a scalar or enum
  const isScalar = SCALAR_TYPES.includes(returnTypeName) ||
                   returnType.astNode?.kind === 'ScalarTypeDefinition' ||
                   returnType.astNode?.kind === 'EnumTypeDefinition';

  if (isScalar) {
    return null;
  }

  // Skip if returns union, interface, or a type in skipTypes
  if (
    returnType.astNode?.kind === 'UnionTypeDefinition' ||
    returnType.astNode?.kind === 'InterfaceTypeDefinition' ||
    SKIP_FRAGMENT_GENERATION.has(returnTypeName) ||
    skipTypes.includes(returnTypeName)
  ) {
    return null;
  }

  const operationName = toCamelCase(fieldName);
  const args = field.args.map((arg: any) => `$${arg.name}: ${arg.type}`).join(', ');
  const argNames = field.args.map((arg: any) => `${arg.name}: $${arg.name}`).join(', ');

  let fieldSelection = '';

  if (returnTypeName.endsWith('Connection')) {
    // Get the actual node type from the Edge type's node field
    const edgeTypeName = returnTypeName.replace('Connection', 'Edge');
    const edgeType = schema.getType(edgeTypeName);

    let nodeType = returnTypeName.replace('Connection', ''); // fallback

    if (edgeType && typeof edgeType.getFields === 'function') {
      const edgeFields = edgeType.getFields();
      if (edgeFields.node) {
        const nodeTypeObj = getNamedType(edgeFields.node.type);
        nodeType = nodeTypeObj.name;
      }
    }

    fieldSelection = `{
    edges {
      node {
        ...${nodeType}Fields
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }`;
  } else if (returnType.astNode?.kind === 'ObjectTypeDefinition') {
    fieldSelection = `{
    ...${returnTypeName}Fields
  }`;
  }

  return `query ${operationName}${args ? `(${args})` : ''} {
  ${fieldName}${argNames ? `(${argNames})` : ''} ${fieldSelection}
}`;
}

function generateMutation(
  fieldName: string,
  field: any,
  schema: any,
  skipTypes: string[]
): string | null {
  const returnType = getNamedType(field.type);
  const returnTypeName = returnType.name;

  // Skip if returns a scalar or enum
  const isScalar = SCALAR_TYPES.includes(returnTypeName) ||
                   returnType.astNode?.kind === 'ScalarTypeDefinition' ||
                   returnType.astNode?.kind === 'EnumTypeDefinition';

  if (isScalar) {
    return null;
  }

  const operationName = toCamelCase(fieldName);
  const args = field.args.map((arg: any) => `$${arg.name}: ${arg.type}`).join(', ');
  const argNames = field.args.map((arg: any) => `${arg.name}: $${arg.name}`).join(', ');

  // Check if it's an output type with common fields
  let fieldSelection = '';
  if (returnType.astNode?.kind === 'ObjectTypeDefinition') {
    const fields = returnType.getFields();

    // Handle standard mutation output pattern (has error and data fields)
    if ('error' in fields) {
      const dataFields = Object.keys(fields).filter(f => f !== 'error' && f !== '__typename');
      const dataFieldStrs = dataFields.map(f => {
        const fieldType = getNamedType(fields[f].type);
        const fieldTypeName = fieldType.name;
        const isFieldObject = fieldType.astNode?.kind === 'ObjectTypeDefinition';
        const isFieldUnion = fieldType.astNode?.kind === 'UnionTypeDefinition';
        const isFieldInterface = fieldType.astNode?.kind === 'InterfaceTypeDefinition';

        // Skip fields of skipTypes
        if (skipTypes.includes(fieldTypeName)) {
          return null;
        }

        if (isFieldUnion) {
          const unionDef = fieldType.astNode;
          const types = unionDef.types?.map((t: any) => t.name.value) || [];

          if (types.length > 0) {
            const inlineFragments = types
              .map((t: string) => `        ... on ${t} {\n          ...${t}Fields\n        }`)
              .join('\n');

            return `    ${f} {
${inlineFragments}
    }`;
          }
          return null;
        }

        if (isFieldInterface) {
          return `    ${f} {
      ...${fieldTypeName}Fields
    }`;
        }

        if (isFieldObject) {
          return `    ${f} {
      ...${fieldTypeName}Fields
    }`;
        }
        return `    ${f}`;
      }).filter(Boolean);

      fieldSelection = `{
${dataFieldStrs.join('\n')}
    error {
      message
      code
      type
      fields {
        field
        message
      }
    }
  }`;
    } else {
      fieldSelection = `{
    ...${returnTypeName}Fields
  }`;
    }
  }

  return `mutation ${operationName}${args ? `(${args})` : ''} {
  ${fieldName}${argNames ? `(${argNames})` : ''} ${fieldSelection}
}`;
}

function getNamedType(type: any): any {
  // Unwrap NonNull and List types
  while (type.ofType) {
    type = type.ofType;
  }
  return type;
}

function toCamelCase(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
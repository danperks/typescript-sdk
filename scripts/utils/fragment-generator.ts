import {
  type GraphQLField,
  type GraphQLNamedType,
  type GraphQLObjectType,
  type GraphQLOutputType,
  GraphQLScalarType,
  GraphQLEnumType,
  GraphQLObjectType as GQLObjectType,
  GraphQLInterfaceType,
  GraphQLUnionType,
  isObjectType,
  isScalarType,
  isEnumType,
  isListType,
  isNonNullType,
  isInterfaceType,
  isUnionType,
} from 'graphql';
import type { GeneratedFragment, SDKConfig } from './types';
import { shouldSkipType } from './schema-fetcher';

interface FieldSelection {
  fieldName: string;
  content: string;
  depth: number;
}

function unwrapType(type: GraphQLOutputType): GraphQLNamedType {
  if (isNonNullType(type) || isListType(type)) {
    return unwrapType(type.ofType);
  }
  return type;
}

function generateFieldSelections(
  type: GraphQLObjectType | GraphQLInterfaceType,
  config: SDKConfig,
  currentDepth: number,
  visitedTypes: Set<string>,
  parentChain: string[] = [],
  fragmentMap?: Map<string, GeneratedFragment>
): FieldSelection[] {
  const selections: FieldSelection[] = [];
  const fields = type.getFields();

  // Prevent infinite recursion
  if (visitedTypes.has(type.name) || currentDepth > config.fragmentDefaults.maxDepth) {
    return selections;
  }

  const newVisited = new Set(visitedTypes);
  newVisited.add(type.name);

  // Special handling for Edge types - they MUST include their node field
  const isEdgeType = type.name.endsWith('Edge');
  // Special handling for Connection types - they MUST include edge fragments
  const isConnectionType = type.name.endsWith('Connection');

  for (const [fieldName, field] of Object.entries(fields)) {
    const fieldType = unwrapType(field.type);

    // Skip if field requires arguments (can't be in fragments)
    if (field.args.length > 0) {
      continue;
    }

    // For Edge types, always include the node field with its fragment
    if (isEdgeType && fieldName === 'node' && fragmentMap) {
      if (isObjectType(fieldType) || isInterfaceType(fieldType)) {
        const nodeFragmentName = `${fieldType.name}Parts`;
        // Check if fragment exists or will exist
        selections.push({
          fieldName,
          content: `${fieldName} {\n  ...${nodeFragmentName}\n}`,
          depth: currentDepth,
        });
        continue;
      }
    }

    // For Connection types, always include edges with the edge fragment
    if (isConnectionType && fieldName === 'edges' && fragmentMap) {
      if (isObjectType(fieldType) || isInterfaceType(fieldType)) {
        const edgeFragmentName = `${fieldType.name}Parts`;
        selections.push({
          fieldName,
          content: `${fieldName} {\n  ...${edgeFragmentName}\n}`,
          depth: currentDepth,
        });
        continue;
      }
    }

    // For Connection types, always include pageInfo
    if (isConnectionType && fieldName === 'pageInfo') {
      if (isObjectType(fieldType) || isInterfaceType(fieldType)) {
        const pageInfoFragmentName = `${fieldType.name}Parts`;
        selections.push({
          fieldName,
          content: `${fieldName} {\n  ...${pageInfoFragmentName}\n}`,
          depth: currentDepth,
        });
        continue;
      }
    }

    // Check if we should include this field
    if (isScalarType(fieldType)) {
      if (config.fragmentDefaults.includeScalars) {
        selections.push({
          fieldName,
          content: fieldName,
          depth: currentDepth,
        });
      }
    } else if (isEnumType(fieldType)) {
      if (config.fragmentDefaults.includeEnums) {
        selections.push({
          fieldName,
          content: fieldName,
          depth: currentDepth,
        });
      }
    } else if (isObjectType(fieldType) || isInterfaceType(fieldType)) {
      // Skip excluded types (unless this is an Edge's node field - already handled above)
      if (shouldSkipType(fieldType.name, config.fragmentDefaults.excludeTypes)) {
        continue;
      }

      // Check if we should recurse
      if (currentDepth < config.fragmentDefaults.maxDepth) {
        const nestedSelections = generateFieldSelections(
          fieldType,
          config,
          currentDepth + 1,
          newVisited,
          [...parentChain, fieldName],
          fragmentMap
        );

        if (nestedSelections.length > 0) {
          const nestedContent = nestedSelections
            .map((s) => `  ${s.content}`)
            .join('\n  ');
          selections.push({
            fieldName,
            content: `${fieldName} {\n  ${nestedContent}\n}`,
            depth: currentDepth,
          });
        }
      }
    } else if (isUnionType(fieldType)) {
      // For unions, we'll just include the __typename
      selections.push({
        fieldName,
        content: `${fieldName} {\n  __typename\n}`,
        depth: currentDepth,
      });
    }
  }

  return selections;
}

export function generateFragment(
  type: GraphQLObjectType | GraphQLInterfaceType,
  config: SDKConfig,
  fragmentMap?: Map<string, GeneratedFragment>
): GeneratedFragment {
  const fragmentName = `${type.name}Parts`;
  
  // Use per-type depth if specified, otherwise use default maxDepth
  const maxDepth = config.fragmentDefaults.perTypeDepth?.[type.name] ?? config.fragmentDefaults.maxDepth;
  const typeConfig = {
    ...config,
    fragmentDefaults: {
      ...config.fragmentDefaults,
      maxDepth,
    },
  };
  
  const selections = generateFieldSelections(type, typeConfig, 0, new Set(), [], fragmentMap);

  // Always include __typename for proper type discrimination
  const fields = ['__typename', ...selections.map((s) => s.fieldName)];

  const selectionContent = selections.map((s) => s.content).join('\n  ');

  const content = `fragment ${fragmentName} on ${type.name} {
  __typename
  ${selectionContent}
}`;

  return {
    typeName: type.name,
    fragmentName,
    content,
    fields,
  };
}

export function shouldGenerateFragment(type: GraphQLNamedType, config: SDKConfig): boolean {
  // Only generate fragments for object types and interfaces
  if (!isObjectType(type) && !isInterfaceType(type)) {
    return false;
  }

  // Skip excluded types
  if (shouldSkipType(type.name, config.fragmentDefaults.excludeTypes)) {
    return false;
  }

  // Skip output types from mutations/queries (but NOT if they have other uses)
  if (type.name.endsWith('Output')) {
    return false;
  }

  // Skip internal/system types
  if (type.name.startsWith('__')) {
    return false;
  }

  return true;
}

export function generateFragments(
  types: Map<string, GraphQLNamedType>,
  config: SDKConfig
): GeneratedFragment[] {
  const fragments: GeneratedFragment[] = [];
  const fragmentMap = new Map<string, GeneratedFragment>();

  // First pass: Generate non-Edge, non-Connection fragments
  for (const type of types.values()) {
    if (shouldGenerateFragment(type, config) && 
        !type.name.endsWith('Edge') && 
        !type.name.endsWith('Connection')) {
      try {
        const fragment = generateFragment(
          type as GraphQLObjectType | GraphQLInterfaceType,
          config
        );
        fragments.push(fragment);
        fragmentMap.set(type.name, fragment);
      } catch (error) {
        console.warn(`Failed to generate fragment for ${type.name}:`, error);
      }
    }
  }

  // Second pass: Generate Edge fragments with access to node fragments
  for (const type of types.values()) {
    if (shouldGenerateFragment(type, config) && type.name.endsWith('Edge')) {
      try {
        const fragment = generateFragment(
          type as GraphQLObjectType | GraphQLInterfaceType,
          config,
          fragmentMap
        );
        fragments.push(fragment);
        fragmentMap.set(type.name, fragment);
      } catch (error) {
        console.warn(`Failed to generate fragment for ${type.name}:`, error);
      }
    }
  }

  // Third pass: Generate Connection fragments with access to Edge fragments
  for (const type of types.values()) {
    if (shouldGenerateFragment(type, config) && type.name.endsWith('Connection')) {
      try {
        const fragment = generateFragment(
          type as GraphQLObjectType | GraphQLInterfaceType,
          config,
          fragmentMap
        );
        fragments.push(fragment);
        fragmentMap.set(type.name, fragment);
      } catch (error) {
        console.warn(`Failed to generate fragment for ${type.name}:`, error);
      }
    }
  }

  return fragments;
}

export function formatFragmentFileName(typeName: string): string {
  // Convert PascalCase to camelCase and add Parts.gql suffix
  const camelCase = typeName.charAt(0).toLowerCase() + typeName.slice(1);
  return `${camelCase}Parts.gql`;
}


import { FieldDefinitionNode, ObjectTypeDefinitionNode, InterfaceTypeDefinitionNode } from "graphql";
import { reduceTypeName } from "./utils";

/**
 * Build a dependency graph for fragment references
 */
export function buildDependencyGraph(
  objects: ObjectTypeDefinitionNode[],
  interfaces: InterfaceTypeDefinitionNode[]
): Map<string, Set<string>> {
  const graph = new Map<string, Set<string>>();

  // Process all object types
  [...objects, ...interfaces].forEach(type => {
    const typeName = type.name.value;
    const dependencies = new Set<string>();

    type.fields?.forEach(field => {
      const fieldType = reduceTypeName(field.type);
      // Add dependency if field references another object/interface type
      if (objects.some(o => o.name.value === fieldType) || interfaces.some(i => i.name.value === fieldType)) {
        dependencies.add(fieldType);
      }
    });

    graph.set(typeName, dependencies);
  });

  return graph;
}

/**
 * Check if referencing targetType from sourceType would create a cycle
 */
export function wouldCreateCycle(
  graph: Map<string, Set<string>>,
  sourceType: string,
  targetType: string,
  visited = new Set<string>()
): boolean {
  // If we've already visited this type in our path, it's a cycle
  if (visited.has(sourceType)) {
    return true;
  }

  // If target directly depends on source, it's a cycle
  const targetDeps = graph.get(targetType);
  if (targetDeps?.has(sourceType)) {
    return true;
  }

  // Check if any of target's dependencies eventually lead back to source
  visited.add(sourceType);
  
  if (targetDeps) {
    for (const dep of targetDeps) {
      if (dep === sourceType || wouldCreateCycle(graph, sourceType, dep, visited)) {
        return true;
      }
    }
  }

  return false;
}

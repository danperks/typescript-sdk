import {
  FieldDefinitionNode,
  InterfaceTypeDefinitionNode,
  ObjectTypeDefinitionNode,
  OperationTypeDefinitionNode,
} from "graphql";
import { getObjectName, isConnection, isEdge, isOperationRoot, isValidObject } from "./object";
import { printTypescriptType } from "./print";
import { Named, NamedFields, PluginContext } from "./types";
import { nodeHasSkipComment } from "./utils";

/**
 * Get the fragment object type matching the name arg
 */
export function findFragment(
  context: PluginContext,
  node?: OperationTypeDefinitionNode | FieldDefinitionNode | Named<FieldDefinitionNode>
): NamedFields<ObjectTypeDefinitionNode | InterfaceTypeDefinitionNode> | undefined {
  if (node) {
    const typescriptType = printTypescriptType(context, node.type);
    const type = typeof typescriptType === 'string' ? typescriptType.replace("[]", "") : typescriptType?.toString()?.replace("[]", "") ?? "";
    return context.fragments.find(operation => operation.name === type);
  }
  return undefined;
}

/**
 * Check whether this fragment has valid content and is not an edge, root or has a skip comment.
 * Generates fragments for ALL object types including connections.
 */
export function isValidFragment(context: PluginContext, fragment: NamedFields<ObjectTypeDefinitionNode>): boolean {
  const hasFields = (fragment.fields ?? []).filter(Boolean).length > 0;
  const skipComment = nodeHasSkipComment(context, fragment);
  const isEdgeType = isEdge(fragment);
  const isRoot = isOperationRoot(context, fragment);
  
  // Generate fragments for all types that have fields, are not edges, not operation roots, and don't have skip comments
  return Boolean(hasFields && !isEdgeType && !isRoot && !skipComment);
}

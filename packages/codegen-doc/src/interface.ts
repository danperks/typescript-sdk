import { InterfaceTypeDefinitionNode, Kind, NonNullTypeNode, ObjectTypeDefinitionNode } from "graphql";
import { NamedTypeNode } from "graphql/language/ast";

/**
 * Checks if an interface implementation has conflicting types with its parent definition.
 * @param implementation The implementation to check
 * @param interfaces The interfaces to check against
 */
export function conflictsWithInterfaceDefinition(
  implementation: ObjectTypeDefinitionNode,
  interfaces: InterfaceTypeDefinitionNode[]
): boolean {
  if (implementation.interfaces && implementation.fields) {
    for (const i of implementation.interfaces) {
      if (!i?.name?.value) continue;
      
      const interfaceFields = interfaces
        .find(interfaceDefinition => interfaceDefinition?.name?.value === i.name.value)
        ?.fields?.reduce((acc, field) => {
          if (!field?.name?.value) return acc;
          return {
            ...acc,
            [field.name.value]: field.type,
          };
        }, {});

      for (const field of implementation.fields) {
        if (!field?.name?.value) continue;
        
        const interfaceField = interfaceFields?.[field.name.value];
        if (interfaceField) {
          if (interfaceField.kind !== field.type.kind) {
            return true;
          }

          switch (interfaceField.kind) {
            case Kind.NAMED_TYPE:
              const namedFieldType = field.type as NamedTypeNode;
              if ((interfaceField as NamedTypeNode).name?.value !== namedFieldType.name?.value) {
                return true;
              }
              break;
            case Kind.NON_NULL_TYPE:
              const nonNullFieldType = ((field.type as NonNullTypeNode).type as NamedTypeNode);
              const nonNullInterfaceType = ((interfaceField as NonNullTypeNode).type as NamedTypeNode);
              if (nonNullInterfaceType.name?.value !== nonNullFieldType.name?.value) {
                return true;
              }
              break;
            default:
              break;
          }
        }
      }
    }
  }

  return false;
}

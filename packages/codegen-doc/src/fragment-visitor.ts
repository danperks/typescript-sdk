import autoBind from "auto-bind";
import {
  DocumentNode,
  FieldDefinitionNode,
  InterfaceTypeDefinitionNode,
  Kind,
  ListTypeNode,
  NamedTypeNode,
  NameNode,
  NonNullTypeNode,
  ObjectTypeDefinitionNode,
} from "graphql";
import { getRequiredArgs } from "./args";
import { buildDependencyGraph, wouldCreateCycle } from "./cycle-detector";
import { findEnum, isValidField } from "./field";
import { isValidFragment } from "./fragment";
import { findInterface, findObject, isConnection } from "./object";
import { printGraphqlComment, printGraphqlDebug, printGraphqlDescription, printLines } from "./print";
import { findQuery } from "./query";
import { Fragment, Named, NamedFields, PluginContext } from "./types";
import { findUnion, getUnionMemberTypes } from "./union";
import { nonNullable, reduceTypeName } from "./utils";
import { conflictsWithInterfaceDefinition } from "./interface";

/**
 * Graphql-codegen visitor for processing the ast and generating fragments
 */
export class FragmentVisitor {
  private _context: PluginContext;
  private _fragments: Fragment[] = [];
  private _fragmentStack: string[] = [];
  private _dependencyGraph: Map<string, Set<string>>;

  /** Initialize the visitor */
  public constructor(context: Omit<PluginContext, "fragments">) {
    autoBind(this);

    this._context = { ...context, fragments: [] };
    this._dependencyGraph = buildDependencyGraph(context.objects, context.interfaces);
  }

  /**
   * Return the plugin context with fragments
   */
  public get context(): PluginContext {
    return {
      ...this._context,
      fragments: this._fragments,
    };
  }

  public Document = {
    /** Join all string definitions */
    leave: (node: DocumentNode): string => {
      return printLines(
        (node.definitions ?? []).map(definition => (typeof definition === "string" ? definition : ``)).sort()
      );
    },
  };

  public ObjectTypeDefinition = {
    enter: (_node: ObjectTypeDefinitionNode): void => {
      const node = _node as unknown as NamedFields<ObjectTypeDefinitionNode>;
      if (isValidFragment(this._context, node)) {
        this._fragmentStack.push(node.name);
      }
    },
    /** Print a fragment if there are fields */
    leave: (_node: ObjectTypeDefinitionNode): string | null => {
      const node = _node as unknown as NamedFields<ObjectTypeDefinitionNode>;

      /** Process non empty object definitions */
      if (isValidFragment(this._context, node)) {
        /** Pop from stack */
        this._fragmentStack.pop();
        
        /** Record fragment on context */
        this._fragments = [...this._fragments, node];

        /** Print fragment */
        return printLines([
          printGraphqlDescription(node.description?.value),
          printGraphqlDebug(node),
          `fragment ${node.name} on ${node.name} {
            __typename
            ${printLines(node.fields.sort())}
          }`,
          " ",
        ]);
      }

      /** Ignore this object */
      return null;
    },
  };

  public InterfaceTypeDefinition = {
    enter: (_node: InterfaceTypeDefinitionNode): void => {
      const node = _node as unknown as NamedFields<InterfaceTypeDefinitionNode>;
      this._fragmentStack.push(node.name);
    },
    /** Print a fragment if there are fields */
    leave: (_node: InterfaceTypeDefinitionNode): string | null => {
      const node = _node as unknown as NamedFields<InterfaceTypeDefinitionNode>;

      /** Pop from stack */
      this._fragmentStack.pop();
      
      this._fragments = [...this._fragments, node];

      return printLines([
        printGraphqlDescription(node.description?.value),
        printGraphqlDebug(node),
        `fragment ${node.name} on ${node.name} {
          __typename
          ${printLines(node.fields.sort())}
            ${(
              this._context.interfaceImplementations[node.name]
                ?.filter(
                  interfaceImplementation =>
                    interfaceImplementation?.name?.value &&
                    !conflictsWithInterfaceDefinition(interfaceImplementation, this._context.interfaces)
                )
                .map(
                  obj => `
                ... on ${obj.name.value} {
                  ... ${obj.name.value}
                }`
                ) ?? []
            ).join("\n")}
          }
        `,
      ]);
    },
  };

  public FieldDefinition = {
    leave: (_node: FieldDefinitionNode): string | null => {
      const type = reduceTypeName(_node.type);

      /** Skip objects defined in constants */
      if (isValidField(this._context, _node)) {
        const node = _node as unknown as Named<FieldDefinitionNode>;
        const description = node.description?.value ? printGraphqlComment([node.description?.value]) : undefined;

        /** Print field name if it is a scalar or an enum */
        if (Object.values(this._context.scalars).includes(type) || findEnum(this._context, node)) {
          return printLines([description, printGraphqlDebug(_node), node.name]);
        }

        /** Print all fields required for matching query */
        const query = findQuery(this._context, node);

        if (query) {
          const queryRequiredArgs = getRequiredArgs(query.arguments)
            .map(arg => arg.name.value)
            .sort();

          // If the query has 0 required args, check if it has an optional id arg
          if (!queryRequiredArgs.length) {
            const optionalIdArg = query.arguments?.find(
              arg => arg.name.value === "id" && arg.type.kind !== "NonNullType"
            );
            if (optionalIdArg) {
              // Use this as a required arg
              queryRequiredArgs.push(optionalIdArg.name.value);
            }
          }

          if (queryRequiredArgs.length) {
            return printLines([
              description,
              printGraphqlDebug(_node),
              printGraphqlDebug(query),
              queryRequiredArgs.length
                ? `${node.name} {
                      ${printLines(queryRequiredArgs)}
                    }`
                : "",
            ]);
          }
          // If query found but no usable args, fall through to try fragment spread
        }
        
        // No query OR query has no args - try fragment spread
        {
          /** Print a matching fragment if no query */
          const objectFragment = findObject(this._context, node);
          const interfaceFragment = findInterface(this._context, node);

          if (objectFragment && !isConnection(objectFragment)) {
            // Check if this would create a circular reference
            const currentFragmentName = this._fragmentStack[this._fragmentStack.length - 1];
            const targetFragmentName = objectFragment.name?.value || objectFragment.name;
            const isCircular = currentFragmentName && typeof targetFragmentName === 'string' && wouldCreateCycle(
              this._dependencyGraph,
              currentFragmentName,
              targetFragmentName
            );
            
            // For circular refs, check if type has an id field, otherwise just use __typename
            let circularContent = '__typename';
            if (isCircular && objectFragment.fields?.some(f => f.name?.value === 'id')) {
              circularContent = '__typename\n    id';
            }
            
            return printLines([
              description,
              printGraphqlDebug(_node),
              printGraphqlDebug(objectFragment),
              isCircular
                ? `${node.name} {
                    ${circularContent}
                  }`
                : `${node.name} {
                    ...${targetFragmentName}
                  }`,
            ]);
          } else if (interfaceFragment) {
            // Check if this would create a circular reference
            const currentFragmentName = this._fragmentStack[this._fragmentStack.length - 1];
            const isCircular = currentFragmentName && wouldCreateCycle(
              this._dependencyGraph,
              currentFragmentName,
              interfaceFragment.name.value
            );
            
            // For circular refs, check if type has an id field, otherwise just use __typename
            let circularContent = '__typename';
            if (isCircular && interfaceFragment.fields?.some(f => f.name.value === 'id')) {
              circularContent = '__typename\n    id';
            }
            
            return printLines([
              description,
              printGraphqlDebug(_node),
              printGraphqlDebug(interfaceFragment),
              isCircular
                ? `${node.name} {
                    ${circularContent}
                  }`
                : `${node.name} {
                    ...${interfaceFragment.name.value}
                  }`,
            ]);
          } else {
            /** Check if this is a union type field */
            const unionType = findUnion(this._context, node);
            if (unionType) {
              // Skip webhook payload union types as they are manually typed
              if (unionType.name.value.endsWith("WebhookPayload")) {
                return null;
              }

              const memberTypes = getUnionMemberTypes(unionType);
              const inlineFragments = memberTypes
                .map(
                  memberType => `            ... on ${memberType} {
              ...${memberType}
            }`
                )
                .join("\n");

              if (inlineFragments) {
                return printLines([
                  description,
                  printGraphqlDebug(_node),
                  printGraphqlDebug(unionType),
                  `${node.name} {
${inlineFragments}
          }`,
                ]);
              }
            }
          }
        }
      }

      /** Ignore this field */
      return null;
    },
  };

  public Name = {
    /** Print name value */
    leave: (node: NameNode): string => {
      return node.value;
    },
  };

  public NamedType = {
    /** Print type value using scalar map */
    leave: (_node: NamedTypeNode): string => {
      const node = _node as unknown as Named<NamedTypeNode>;
      return this._context.scalars[node.name] ?? node.name;
    },
  };

  public NonNullType = {
    /** Return the non nullable type */
    leave: (node: NonNullTypeNode, _: unknown, parent?: unknown): NamedTypeNode | NonNullTypeNode | ListTypeNode => {
      return nonNullable(parent) ? node.type : node;
    },
  };
}

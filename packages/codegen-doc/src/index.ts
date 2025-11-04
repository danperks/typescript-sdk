export { plugin } from "./plugin";
export { validate } from "./validate";

// Export all types
export type {
  Named,
  NamedFields,
  Fragment,
  PluginConfig,
  PluginContext,
  ArgDefinition,
  ArgList,
} from "./types";

// Export enums (not as type-only)
export { OperationType } from "./types";

// Export utilities
export {
  nonNullable,
  upperFirst,
  lowerFirst,
  getLast,
  getKeyByValue,
  nodeHasSkipComment,
  reduceTypeName,
  reduceListType,
  reduceNonNullType,
  validateExtension,
} from "./utils";

// Export field utilities
export { isValidField, isScalarField, findEnum } from "./field";

// Export object utilities
export { findObject, findInterface, isConnection, isEdge, isOperationRoot, isValidObject, getObjectName } from "./object";

// Export fragment utilities
export { findFragment, isValidFragment } from "./fragment";

// Export query utilities
export { findQuery, isValidQuery } from "./query";

// Export union utilities
export { findUnion, getUnionMemberTypes } from "./union";

// Export args utilities
export { getRequiredArgs, getArgList } from "./args";

// Export variable utilities
export { getRequiredVariables, getOptionalVariables } from "./variable";

// Export constants
export { Doc } from "./constants";

// Export context visitor
export { ContextVisitor } from "./context-visitor";

// Export logger
export { logger } from "./logger";

// Export print utilities
export {
  printLines,
  printList,
  printPascal,
  printGraphqlType,
  printTypescriptType,
  printGraphqlComment,
  printGraphqlDescription,
  printGraphqlDebug,
  printComment,
  printDebug,
  printTernary,
  printSet,
  printElseThrow,
  printElseWarn,
} from "./print";

// Export operation print utilities
export { printPrefixedMutationName } from "./print-operation";

// Export scalar utilities  
export { printTypescriptScalar } from "./scalar";

// Export args utilities (already done above but repeated for clarity)
export { printGraphqlInputArgs, printGraphqlResponseArgs } from "./args";

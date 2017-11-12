export const SET_VARIABLES = 'heap/SET_VARIABLES';
export const REMOVE_VARIABLES = 'heap/REMOVE_VARIABLES';
export const PUSH_SCOPE = 'heap/PUSH_SCOPE';
export const POP_SCOPES = 'heap/POP_SCOPES';

/**
 * @param {Record<string, any> | [string, Record<string, any>]} vars
 */
export const setVariables = (vars) => ({
  type: SET_VARIABLES,
  payload: vars,
});

export const removeVariables = (varNames) => ({
  type: REMOVE_VARIABLES,
  payload: varNames,
});

/**
 * @param {[scopeName, variables]} payload
 */
export const pushScope = (payload) => ({
  type: PUSH_SCOPE,
  payload,
});

export const popScopes = (amount) => ({
  type: POP_SCOPES,
  payload: amount,
});

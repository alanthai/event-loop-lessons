import { omit } from '../../utils/omit';
import {
  SET_VARIABLES,
  REMOVE_VARIABLES,
  PUSH_SCOPE,
  POP_SCOPES,
} from './heap.actions';


/*
interface HeapState {
  [index: number]: [string, Record<string, any>];
}
*/

const INITIAL_STATE = [['Global', {}]];

/**
 * @param {Record<string, any> | [string, Record<string, any>]} payload
 */
function setVariables(state, payload) {
  let scopeIndex;
  let replaceVariables;
  if (Array.isArray(payload)) {
    scopeIndex = state
      .findIndex(([scopeName]) => scopeName === payload[0]);
    replaceVariables = payload[1];
  } else {
    scopeIndex = state.length - 1;
    replaceVariables = payload;
  }

  const [scope, oldVariables] = state[scopeIndex];
  const newVariables = { ...oldVariables, ...replaceVariables };

  const newState = state.slice();
  newState.splice(scopeIndex, 1, [scope, newVariables]);
  return newState;
}

/**
 * @param { string[] | {scope: string; variables: string[];} } payload
 */
function removeVariables(state, payload) {
  let scopeIndex;
  let variableNames;
  if (Array.isArray(payload)) {
    scopeIndex = state.length - 1;
    variableNames = payload;
  } else {
    scopeIndex = state
      .findIndex(([scopeName]) => scopeName === payload.scope);
    variableNames = payload.variables;
  }

  const [scope, variables] = state[scopeIndex];
  const newVariables = omit(variableNames, variables);

  const newState = state.splice();
  newState.splice(scopeIndex, 1, [scope, newVariables]);
  return newState;
}

export function heapReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_VARIABLES:
      return setVariables(state, action.payload);      

    case REMOVE_VARIABLES:      
      return removeVariables(state, action.payload);

    case PUSH_SCOPE:
      return state.concat([action.payload]);

    case POP_SCOPES:
      // can't pop global scope
      const amount = Math.max(state.length - action.payload, 1);
      return state.slice(0, amount);

    default:
      return state;
  }
}

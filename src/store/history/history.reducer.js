import { UNDO, REDO, CLEAR_HISTORY } from './history.actions';


const defaultActions = { undo: UNDO, redo: REDO, clear: CLEAR_HISTORY };

export function historyReducer(reducer, actions = {}) {
  const { undo, redo, clear } = { ...defaultActions, ...actions };

  // Call the reducer with empty action to populate the initial state
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: [],
  };

  return function(state = initialState, action) {
    const { past, present, future } = state;

    switch (action.type) {
      case undo:
        const previous = past[past.length - 1];
        if (previous === undefined) {
          return state;
        }
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
          future: [present, ...future]
        };
      case redo:
        const next = future[0];
        const newFuture = future.slice(1);
        return {
          past: [...past, present],
          present: next,
          future: newFuture
        };
      case clear:
        return {
          past: [],
          present: reducer(present, action),
          future: [],
        };
      default:
        // Delegate handling the action to the passed reducer
        const newPresent = reducer(present, action);
        if (present === newPresent) {
          return state;
        }
        return {
          past: [...past, present],
          present: newPresent,
          future: [],
        };
    }
  };
}

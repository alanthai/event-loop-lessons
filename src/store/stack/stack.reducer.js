import { POP_STACK_ITEMS, PUSH_STACK_ITEMS } from './stack.actions';


/*
interface StackItem {
  readonly content: string;
}

interface StackState = StackItem[]
*/

const INITIAL_STATE = [];

export function stackReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PUSH_STACK_ITEMS:
      return state.concat(action.payload);
    case POP_STACK_ITEMS:
      return state.slice(0, -action.payload);
    default:
      return state;
  }
}

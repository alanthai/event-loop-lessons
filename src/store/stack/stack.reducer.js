import { POP_STACK_ITEMS, PUSH_STACK_ITEMS } from './stack.actions';


/*
interface StackItem {
  readonly content: string;
}

interface StackState {
  readonly items: StackItem[];
}
*/

const INITIAL_STATE = {
  items: [],
};

export function stackReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PUSH_STACK_ITEMS:
      return { ...state, items: state.items.concat(action.payload) };
    case POP_STACK_ITEMS:
      return { ...state, items: state.items.slice(0, -action.payload) };
    default:
      return state;
  }
}

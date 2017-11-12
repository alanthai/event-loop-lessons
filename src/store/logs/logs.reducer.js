import { PUSH_LOG } from './logs.actions';

export function logsReducer(state = [], action) {
  switch (action.type) {
    case PUSH_LOG:
      return state.concat(action.payload)
    default:
      return state;
  }
}

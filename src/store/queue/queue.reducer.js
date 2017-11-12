import { ENQUEUE_MESSAGE, DEQUEUE_MESSAGE } from './queue.actions';


/*
interface QueueItem {
  readonly message: string;
}

interface QueueState {
  readonly messages: QueueItem[];
}
*/

const INITIAL_STATE = {
  messages: [],
};

export function queueReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ENQUEUE_MESSAGE:
      return { ...state, messages: state.messages.concat(action.payload) };
    case DEQUEUE_MESSAGE:
      return { ...state, messages: state.messages.slice(1) };
    default:
      return state;
  }
}

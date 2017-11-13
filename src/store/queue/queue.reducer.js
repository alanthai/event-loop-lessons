import { ENQUEUE_MESSAGE, DEQUEUE_MESSAGE } from './queue.actions';


/*
interface QueueItem {
  readonly message: string;
}

type QueueState = QueueItem[];
*/

const INITIAL_STATE = [];

export function queueReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ENQUEUE_MESSAGE:
      return state.concat(action.payload);
    case DEQUEUE_MESSAGE:
      return state.slice(1);
    default:
      return state;
  }
}

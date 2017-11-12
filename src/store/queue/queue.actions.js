export const ENQUEUE_MESSAGE = 'message/ENQUEUE_MESSAGE';
export const DEQUEUE_MESSAGE = 'message/DEQUEUE_MESSAGE';

export const enqueueMessage = (message) => ({
  type: ENQUEUE_MESSAGE,
  payload: message,
});

export const dequeueMessage = () => ({
  type: DEQUEUE_MESSAGE,
});

export const StepCreatorForm = () => (
  <form>
    <button onClick={() => pushStackItems({ content: 'stack stuff' })}>
      Push Stack Item
    </button>
    <button onClick={() => popStackItems(1)}>
      Pop Stack Item
    </button>

    <button onClick={() => enqueueMessage({ message: 'message' })}>
      Add to Queue
    </button>
    <button onClick={dequeueMessage}>
      Dequeue
    </button>

    <button onClick={() => addWebApi({ content: 'web stuff' })}>
      Add WebApi
    </button>
    <button>
      Remove WebApi
    </button>
  </form>
);

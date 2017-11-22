function jsonToStep(jsonStep) {
  return Object.keys(jsonStep).reduce((step, jsonKey) => {
    const key = jsonKey.replace(/\.[a-z]/g, (a) => a[1].toUpperCase());
    return (step[key] = jsonStep[jsonKey], step);
  }, {});
}

let messageId = 0;
function assignQueueItemsId(step) {
  if (!step.queueEnqueue) {
    return step;
  }

  const queueEnqueue = { id: messageId++, ...step.queueEnqueue };
  return { ...step, queueEnqueue };
}

export function jsonToLesson(jsonLesson) {
  return {
    ...jsonLesson,
    code: jsonLesson.code.join('\n'),
    steps: jsonLesson.steps
      .map(jsonToStep)
      .map(assignQueueItemsId),
  };
}

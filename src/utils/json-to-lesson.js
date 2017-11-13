function jsonToStep(jsonStep) {
  return Object.keys(jsonStep).reduce((step, jsonKey) => {
    const key = jsonKey.replace(/\.[a-z]/g, (a) => a[1].toUpperCase());
    return (step[key] = jsonStep[jsonKey], step);
  }, {});
}

export function jsonToLesson(jsonLesson) {
  return {
    ...jsonLesson,
    code: jsonLesson.code.join('\n'),
    steps: jsonLesson.steps.map(jsonToStep),
  };
}

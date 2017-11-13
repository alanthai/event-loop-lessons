const lesson = (state) => state.lessons.lesson;

export const stepNext = (state) => {
  const stepNumber = state.lessons.step;
  const steps = lesson(state).steps;
  return steps[stepNumber];
}

export const lessonTitle = (state) => lesson(state).title;
export const lessonDescription = (state) => lesson(state).description;
export const lessonCode = (state) => lesson(state).code;

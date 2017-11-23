const lessons = (state) => state.present.lessons;
const lesson = (state) => lessons(state).lesson;
const step = (state) => lessons(state).step;

export const stepNext = (state) => {
  const stepNumber = step(state);
  const steps = lesson(state).steps;
  return steps[stepNumber];
};

export const lessonTitle = (state) => lesson(state).title;
export const lessonDescription = (state) => lesson(state).description;
export const lessonCode = (state) => lesson(state).code;

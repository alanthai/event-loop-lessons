import type { Lesson } from '../../types/lesson.type';
import type { Step } from '../../types/step.type';


export const SET_LESSON = 'lessons/SET_LESSON';
export const NEXT_STEP = 'lessons/NEXT_STEP';

export const setLesson = (lesson: Lesson) => ({
  type: SET_LESSON,
  payload: lesson,
});

export const nextStep = (step: Step) => ({
  type: NEXT_STEP,
  payload: step,
});

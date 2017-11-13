import { Lesson } from '../../types/lesson.type';


export const SET_LESSON = 'lessons/SET_LESSON';
export const NEXT_STEP = 'less/ons/NEXT_STEP';

export const setLesson = (lesson: Lesson) => ({
  type: SET_LESSON,
  payload: lesson,
});

export const nextStep = () => ({
  type: NEXT_STEP,
});

import { combineReducers } from 'redux';

import { SET_LESSON, NEXT_STEP } from './lessons.actions';
import { jsonToLesson } from '../../utils/json-to-lesson';
import lesson from '../../lessons/intro.json';


const initialLesson = jsonToLesson(lesson);

function stepReducer(state = 0, action) {
  switch (action.type) {
    case SET_LESSON:
      return 0;
    case NEXT_STEP:
      return state + 1;
    default:
      return state;
  }
}

function lessonReducer(state = initialLesson, action) {
  switch (action.type) {
    case SET_LESSON:
      return action.payload;
    default:
      return state;
  }
}

export const lessonsReducer = combineReducers({
  step: stepReducer,
  lesson: lessonReducer,
});

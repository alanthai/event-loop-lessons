

import { pipeReducers } from './utils';
import { lessonsCoordinatorReducer } from './lessons/lessons-coordinator.reducer';
import { lessonStepReducer } from './lessons/lesson-step.reducer';
import { historyReducer } from './history/history.reducer';
import { SET_LESSON } from './lessons/lessons.actions';


export const rootReducer = historyReducer(pipeReducers(
  lessonsCoordinatorReducer,
  lessonStepReducer
), { clear: SET_LESSON });

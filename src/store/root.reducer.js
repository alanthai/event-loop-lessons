

import { pipeReducers } from './utils';
import { lessonsCoordinatorReducer } from './lessons/lessons-coordinator.reducer';
import { lessonReducer } from './lessons/lesson-step.reducer';


export const rootReducer = pipeReducers(
  lessonsCoordinatorReducer,
  lessonReducer
);

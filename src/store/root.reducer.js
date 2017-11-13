import { combineReducers } from 'redux';

import { pipeReducers } from './utils';
import { codeSnippetReducer } from './code-snippet/code-snippet.reducer';
import { heapReducer } from './heap/heap.reducer';
import { logsReducer } from './logs/logs.reducer';
import { lessonsReducer } from './lessons/lessons.reducer';
import { lessonsCoordinatorReducer } from './lessons/lessons-coordinator.reducer';
import { queueReducer } from './queue/queue.reducer';
import { stackReducer } from './stack/stack.reducer';
import { webApiReducer } from './web-api/web-api.reducer';


export const rootReducer = pipeReducers(
  lessonsCoordinatorReducer,
  combineReducers({
    codeSnippet: codeSnippetReducer,
    heap: heapReducer,
    logs: logsReducer,
    lessons: lessonsReducer,
    queue: queueReducer,
    stack: stackReducer,
    webApi: webApiReducer,
  })
);

import { combineReducers } from 'redux';

import { codeSnippetReducer } from './code-snippet/code-snippet.reducer';
import { heapReducer } from './heap/heap.reducer';
import { logsReducer } from './logs/logs.reducer';
import { queueReducer } from './queue/queue.reducer';
import { stackReducer } from './stack/stack.reducer';
import { webApiReducer } from './web-api/web-api.reducer';


export const rootReducer = combineReducers({
  codeSnippet: codeSnippetReducer,
  heap: heapReducer,
  logs: logsReducer,
  queue: queueReducer,
  stack: stackReducer,
  webApi: webApiReducer,
});

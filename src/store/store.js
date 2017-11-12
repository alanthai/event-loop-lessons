import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

import { rootReducer } from './root.reducer';


const logger = createLogger({
  collapsed: true
});

export const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

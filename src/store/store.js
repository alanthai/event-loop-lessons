import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';

import { rootReducer } from './root.reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger({
  collapsed: true
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import { App } from './app';
import { store } from './store/store';
import { routerService } from './services/router.service';


routerService.navigate(window.location.hash.slice(1));

ReactDOM.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import { App } from './app';
import { store } from './store/store';
import { locationService } from './services/location.service';
import { lessonsService } from './services/lessons.service';


lessonsService.setLesson(locationService.fragment);

ReactDOM.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root')
);

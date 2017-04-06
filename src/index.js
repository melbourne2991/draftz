import 'babel-polyfill'
import 'rxjs';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App, Notes, NoteEditor } from './containers';
import configureStore from './configureStore';
import history from './history';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import './global.scss';

const store = configureStore();
const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App/>
    </BrowserRouter>
  </Provider>,
  mountPoint)

if (module.hot) {
  module.hot.accept();
}

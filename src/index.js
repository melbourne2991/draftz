import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App, Notes, NoteEditor } from './containers';
import configureStore from './configureStore';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import './global.scss';

const store = configureStore()
const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>, 
  mountPoint)

if (module.hot) {
  module.hot.accept();
}
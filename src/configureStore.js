import { createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers/index';
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import { rootEpic } from './actions';

export default function configureStore(initialState) {
  const history = createBrowserHistory();

  const middleware = applyMiddleware(
    createEpicMiddleware(rootEpic),
    routerMiddleware(history)
  );

  const store = createStore(rootReducer, middleware, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers/index').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

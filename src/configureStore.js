import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

export default function configureStore(initialState) {
  const history = createBrowserHistory();

  const middleware = applyMiddleware(
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

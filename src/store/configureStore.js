import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';

import { reduxReactRouter } from 'redux-router';

import createHistory from 'history/lib/createBrowserHistory';

import createLogger from 'redux-logger';

import routes from '../routes';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
  //predicate: (getState, action) => action.type !== AUTH_REMOVE_TOKEN
});

import { devTools, persistState } from 'redux-devtools';

import rootReducer from '../reducers';

const finalCreateStore = compose(
  reduxReactRouter({ createHistory, routes }),

  // Enables your middleware:
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ),
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

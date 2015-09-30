import 'babel-core/polyfill';

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import 'todomvc-app-css/index.css';
import { ReduxRouter }  from 'redux-router';

import routes from './routes';

// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import style from './styles/style.scss';


const store = configureStore();

ReactDOM.render(
    <div>
        <Provider store={store}>
            <ReduxRouter>
                { routes } 
            </ReduxRouter>
        </Provider>
        <DebugPanel right left bottom>
            <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
    </div>,
  document.getElementById('root')
);


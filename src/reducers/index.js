import { combineReducers } from 'redux';
import todos from './todos';

import { routerStateReducer } from 'redux-router';

const rootReducer = combineReducers({
    router : routerStateReducer,
    todos
});

export default rootReducer;

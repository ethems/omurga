import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

import routesReducer   from './routes-reducer';

const rootReducer = combineReducers({
    routes:routesReducer
});

export default rootReducer;

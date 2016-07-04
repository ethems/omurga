import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

import routesReducer   from './routes-reducer';
import marketReducer   from './market-reducer';

const rootReducer = combineReducers({
    routes:routesReducer,
    markets:marketReducer
});

export default rootReducer;

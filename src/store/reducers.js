import {combineReducers} from 'redux';
import { pathsReducer } from './paths';
import { routeReducer } from './routes'; 


export const rootReducer = combineReducers({
   routes: routeReducer,
   allPaths: pathsReducer,
})
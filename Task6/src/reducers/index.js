import {combineReducers} from 'redux';

//reducers
import employeesReducer from "./employeesReducer";

const reducers=combineReducers({
    ...employeesReducer,
})

export default reducers;
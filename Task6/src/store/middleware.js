import {applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware =createSagaMiddleware();
const middleware = [sagaMiddleware];



export default applyMiddleware(...middleware);
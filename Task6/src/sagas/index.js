import {all,fork} from 'redux-saga/effects';

import employees from "./employeesSaga";

export default function* rootSaga() {
    yield all([
        fork(employees),
    ])
}
import {put, call, all, takeLatest} from 'redux-saga/effects'

//action
import {addAllEmployees,getData} from "../action";

import {serverGet} from "../helpers/requests";
import {employeesUrl} from "../constants/urls";

export function* getDataSaga() {
    try {
        const employees= yield call(serverGet,employeesUrl);
        yield put(addAllEmployees(employees.data));


    } catch (err) {
        console.log(err);
    }
}
export default function* employees() {
    yield all([
        takeLatest(getData.toString(), getDataSaga),
    ])
}

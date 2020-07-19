import {createActions} from 'redux-actions';

export const {
    addAllEmployees,
    getData,
    deleteEmployees,
    addNewEmployees,
} = createActions(
    'ADD_ALL_EMPLOYEES',
    'GET_DATA',
    'DELETE_EMPLOYEES',
    'ADD_NEW_EMPLOYEES',
);

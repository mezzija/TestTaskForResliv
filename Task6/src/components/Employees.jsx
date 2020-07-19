import React from 'react';
import {useDispatch} from "react-redux";
//action
import {deleteEmployees} from "../action";

//style
import useStyles from '../styles/components/Employees'

const Employees=(props)=>{
    const classes=useStyles();
    const dispatch=useDispatch();
    const handleClick=(event)=>{
        event.preventDefault();
        dispatch(deleteEmployees(props.employees));
    }
    return(
        <div className={`${classes.employees} container`} >
            <div>{props.employees.employee_name}</div>
            <a href='#' onClick={handleClick}>Delete</a>
        </div>
    )
}

Employees.displayName = 'Employees';
export default Employees;
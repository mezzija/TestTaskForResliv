import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import classNames from 'classnames';
//action
import {addNewEmployees} from "../action";
//style
import useStyles from '../styles/components/InputEmployees'

const InputEmployees=()=>{
    const classes=useStyles();
    const dispatch=useDispatch();
    const [active,setActive]=useState(false)
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(event.target[0].value.length>3){
            setActive(false);
            dispatch(addNewEmployees(event.target[0].value))
            event.target[0].value='';
        }else{
            setActive(true);
        }

    }
    return(
        <div className={`${classes.inputEmployees} container`} >
            <form action="" onSubmit={handleSubmit}>
                <input type="text" className={classes.inputName}/>
                <input type="submit" value="ADD" className={classes.addButton} />
            </form>
            <div className={classNames(classes.err,{[classes.setErr]:!active})}>name too short</div>
        </div>
    )
}

InputEmployees.displayName = 'InputEmployees';
export default InputEmployees;
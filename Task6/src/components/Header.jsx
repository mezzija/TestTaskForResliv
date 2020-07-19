import React, {useEffect,useState} from 'react';
import {useHistory} from "react-router-dom";
import ClassNames from 'classnames';

import useStyle from '../styles/components/Header'
const Headers=()=>{
    const classes= useStyle();
    const [active,setActive]=useState(true);
    const history = useHistory();

    useEffect(()=>{
        if(history.location.pathname==='/employees'){
            setActive(false);
        }
    },[])


    const home = (event) => {
        event.preventDefault();
        setActive(true);
        history.push(`/`);
    }


    const employees = (event) => {
        event.preventDefault();
        setActive(false);
        history.push(`/employees`);
    }

    return(
        <div className={classes.header}>
            <div className="container">
                <a  href="#"  className={ClassNames({[classes.active]:!active})} onClick={home}>Главная</a>
                <a className={ClassNames({[classes.active]:active})} onClick={employees} href="#">Сотрудники</a>
            </div>

        </div>
    )

}


export default Headers;
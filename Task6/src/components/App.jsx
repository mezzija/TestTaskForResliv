import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import { hot } from 'react-hot-loader/root';
import {
    Switch,
    Route
} from "react-router-dom";
//action
import {getData} from "../action";

import Header from './Header'
import Employees from "./Employees";
import InputEmployees from "./InputEmployees";
import RootStyle from "../styles/index";

const App = () => {
    RootStyle();
    const dispatch=useDispatch();
    const employees=useSelector(store=>store.employees.staff)
    useEffect(()=>{
        dispatch(getData());
    },[])
    return(
        <>
            <Header/>
            <Switch>
                <Route path="/employees">
                    <InputEmployees/>
                    {
                        employees.map(item=>(
                            <Employees key={item.id} employees={item}/>
                        ))
                    }
                </Route>
            </Switch>
        </>
    )
}


App.displayName = 'App';
export default hot(App);
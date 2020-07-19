import {createUseStyles} from 'react-jss';

const EmployeesStyle={
    employees:{
        backgroundColor: '#ffffff',
        padding: '10px 10px',
        fontSize:'25px',
        display:'flex',
        justifyContent:' space-between',
        marginBottom: '10px',
        '& a':{
            color: 'red',
        }

    }

};
export default createUseStyles(EmployeesStyle,{name:'Employees',index:300});
import {createUseStyles} from 'react-jss';

const InputEmployeesStyle={
    inputEmployees:{
        marginBottom:'50px',
        '& form':{
          display:'flex',
        },

    },
    inputName:{
        width:'80%',
        fontSize: '20px',
        padding:'10px 0',
    },
    addButton:{
        width: '15%',
        marginLeft:'10px',
        cursor:'pointer',
        fontSize: '20px',
        border: 'none',
        backgroundColor: '#60de14',

    },
    err:{
        marginLeft: '20px',
        color:'red',
    },
    setErr:{
        display: 'none',
    }

};
export default createUseStyles(InputEmployeesStyle,{name:'InputEmployees',index:301});
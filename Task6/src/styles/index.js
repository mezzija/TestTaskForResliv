import {createUseStyles} from 'react-jss';


const RootStyle = ()=> ({
    '@global': {
        '*, :after, :before': {
            boxSizing: ' border-box',
        },
        '*':{
            margin:0,
            fontWeight:400,
        },
        body: {
            fontSize: '20px',
            color: '#000000',
            backgroundColor:'#d8d8d8',
        },
        a: {
            textDecoration: 'none',
        },
        '.container':{
            maxWidth:'900px',
            margin: '0 auto',
        },
        input:{
            outline:'none',
        },


    }
})

export default createUseStyles(RootStyle,{name:'Root',index:100});
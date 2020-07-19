import {createUseStyles} from 'react-jss';

const HeadersStyle={
    header:{
        backgroundColor: '#252525',
        marginBottom: '50px',
        '& a':{
            color:'#ffffff',
            fontSize:'25px',
            marginRight:'15px',

        },

        '& .container ':{
            padding:'20px 0 20px 0',
        }
    },
    active:{
        opacity: '0.5',
    },

};
export default createUseStyles(HeadersStyle,{name:'headers',index:200});
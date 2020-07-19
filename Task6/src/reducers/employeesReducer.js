import {handleActions} from 'redux-actions';
import CloneDeep from 'lodash.clonedeep';
//action
import {addAllEmployees,deleteEmployees,addNewEmployees} from '../action';
//store
import {employeesStore} from '../constants/defaultStore';

export default {
    employees: handleActions({
        [addAllEmployees]:(state,{payload=[]})=>{
            return {...state,staff:payload};
        },
        [deleteEmployees]:(state,{payload={}})=>{
            const newState = CloneDeep(state);
            newState.freeId.push(payload.id);
            return {freeId: newState.freeId,staff:newState.staff.filter(item=>item.id!==payload.id)};
        },
        [addNewEmployees]:(state,{payload=''})=>{

            const newState = CloneDeep(state);
            let id='';
            if(newState.freeId.length>0){
                id=newState.freeId[newState.freeId.length-1];
                newState.freeId.pop();
            }else {
                id=newState.staff.length+1;
            }
            const newEmployer={
                id: id.toString(),
                employee_name: payload,
                employee_salary:'',
                employee_age: '',
                profile_image: '',
            }
            newState.staff.push(newEmployer);
            return newState;



        }

        ,

    }, employeesStore)
}


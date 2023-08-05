import { USER_DATA } from "./userType";

const initialState ={
    data:"",

}

export const UserReducer =(state = initialState,action)=>{
    const{type,payload}=action
    switch (type) {
        case USER_DATA:return{
            ...state,
            data:payload
            }        
        
            
    
        default:return state
    }

}
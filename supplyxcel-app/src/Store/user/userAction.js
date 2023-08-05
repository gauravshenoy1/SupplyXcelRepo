import { USER_DATA } from "./userType";

export const user =(data)=>{
     return{
       type:USER_DATA,
       payload:data
    }
    }

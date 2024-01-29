import { stopSubmit } from "redux-form";
import { loginAPI } from "../api/api";

const SET_USER_DATA="network_app/auth/SET_USER_DATA"; 

let initialState={
        id: null,
        email: null,
        login: null,
   
    isAuth: false,
   
   
}
const authReducer=(state=initialState,action)=>{
    
    switch (action.type) {
        
        case SET_USER_DATA:
           
            return{
                ...state,
                ...action.payload,
                
            }
            
    
        default:
            return state;
    }
        
}
export const setAuthUserData=(email,id,login,isAuth)=>({type:SET_USER_DATA,payload:{email,id,login,isAuth}})
    

export const getLoginTC=()=>async (dispatch)=>{
    let data = await loginAPI.setLogin()
    if(data.resultCode===0){
        let {email,id,login}=data.data
        dispatch(setAuthUserData(email,id,login,true));
        console.log(data.data)
        
    }
       
    };
    

export const LoginTC=(email,password,rememberMe)=>async(dispatch)=>{
      let data = await loginAPI.Login(email,password,rememberMe)
        
      if(data.resultCode===0){
        dispatch(getLoginTC());
      }else{
        let message = data.messages.length ? data.messages[0] : 'Some Error'
        let action=stopSubmit('Login',{_error:message});
        dispatch(action);
      }
       
    }


export const LogoutTC=()=> async (dispatch)=>{
    let data = await loginAPI.Logout()
        
    if(data.resultCode===0){
    dispatch(setAuthUserData(null,null,null,false));
    } 
}
export default authReducer;
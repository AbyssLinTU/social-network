import { getLoginTC } from "./auth_reducer";

const INITIALIZED_SUCESS="INITIALIZED_SUCESS"; 

let initialState={
        initialized:false,
   
   
}
const AppReducer=(state=initialState,action)=>{
    
    switch (action.type) {
        
        case INITIALIZED_SUCESS:
           
            return{
                ...state,
                initialized:true,
                
            }
            
    
        default:
            return state;
    }
        
}
export const initializedSucess=()=>({type:INITIALIZED_SUCESS})
    

export const initializeApp=()=>{
    return (dispatch)=>{
        let promise=dispatch(getLoginTC());
        Promise.all([promise]).then(() => {
          dispatch(initializedSucess());
    
        })
    }
}
export default AppReducer;
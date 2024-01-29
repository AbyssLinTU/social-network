import { profileAPI } from "../api/api";

let ADD_POST='network_app/profile/ADD-POST';
let SET_USERS_PROFILE="network_app/profile/SET_USERS_PROFILE";
let SET_STATUS='network_app/profile/SET_STATUS';
let CHANGE_STATUS='network_app/profile/CHANGE_STATUS';
let DELETE_POST='network_app/profile/DELETE_POST';

let initialState = { postData:[
    {id:1, message:"Post1", likeCount:15},
    {id:2, message:"Post2", likeCount:20},
    {id:3, message:"Post 3", likeCount:42},
    ],
    newPostText: "",
    profile:null,
    statusText:""
};
let i=3
const profileReducer =(state = initialState,action)=> {
    switch (action.type) {
        case ADD_POST:{
            debugger
            i++
            let newPost ={
                id:i,
                message:action.text,
                likeCount:0,
            };
            return{
                ...state,
                postData:[...state.postData,newPost],
                newPostText:'',
            }
            
            
        }
        case DELETE_POST:{
            return{
                ...state,
                postData:state.postData.filter(p=> p.id!= action.id)
            }
        }   
       
        case SET_USERS_PROFILE:
                {
                    return{
                        ...state,
                        profile:action.profile
                    }
                }
        case CHANGE_STATUS:{
            return{
                ...state,
                statusText:action.newStatus,
            }
        }
        case SET_STATUS:{
            return{
                
                ...state,
                statusText:action.status,
            }
        }
        default: return state;
           
    }
}

export const setUserProfile=(profile)=>({type:SET_USERS_PROFILE,profile});
export const addPostActionCreator =(text)=>({type:ADD_POST,text});

export const onChangeStatusAC=(text)=>({type:CHANGE_STATUS, newStatus:text})
export const onSetStatusAC=(text)=>({type:CHANGE_STATUS, status:text})
export const deletePost=(postId)=>({type:DELETE_POST, id:postId})

export const onSetStatusTC=(userId)=>async(dispatch)=>{
    let data = await profileAPI.getUserStatus(userId)
    dispatch(onChangeStatusAC(data))
}

export const updateStatusTC=(status)=>async(dispatch)=>{
    let data = await profileAPI.updateStatus(status)
    
    if (data.resultCode===0){
        dispatch(onChangeStatusAC(status))
    }
}
export const getUserProfileTC=(userId)=>async (dispatch)=>{
    let data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data));
}

export default profileReducer;
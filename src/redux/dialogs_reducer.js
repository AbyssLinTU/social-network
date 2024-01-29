let ADD_MESSAGE='network_app/dialogs/ADD-MESSAGE';

let initialState ={messagesData:[
    {id:1 , messageText:"Hi"},
    {id:2 , messageText:"How are you"},
    {id:3 , messageText:"Im Johan Libert"},
   ],
dialogsData:[
    {id:1, name:"Sveta" , icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQtzYwn_6EXyw1Q770iNiEe_RKIwyfqW5oA&usqp=CAU"},
    {id:2, name:"Yasha", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIC73yOrLRWDYc2jo2uz6acjOp6697TvNEw&usqp=CAU"},
    {id:3, name:"Sasha", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXxjHQbQegGFkex-xSCLmX6LhuPqxZrbJnw&usqp=CAU"},
    {id:4, name:"Valera", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaCID2Yhnb8G4aOnu8B0XtgEVOwr9mCvzcg&usqp=CAU"},
    {id:5, name:"Andrey", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8R6gwnaqC26WxreraFBydC2PYSzk5IiY-g&usqp=CAU"},
    {id:6, name:"Kira", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UwUlwr8thOXVXVPeMgCwWgnu9DXvoMHL8A&usqp=CAU"},
  ],
newMessageText:'',};
let i=3;
const dialogsReducer =(state=initialState,action)=> {
    
    switch (action.type) {
        case ADD_MESSAGE:{
            i++
            let newMessage={
                id:i,
                messageText:action.newMessageText,
            }
            return{
                ...state,
                messagesData:[...state.messagesData,newMessage], 
                newMessageText:'',
            }
        }
           
    
        default: return state;
           
    }
}

export const addMessageActionCreator =(text)=>{
   return {type:ADD_MESSAGE,
    newMessageText:text}
}
export default dialogsReducer;
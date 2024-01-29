import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebar_reducer";


let store={
    _state: {
        profilePage:{ 
            postData:[
            {id:1, message:"Post1", likeCount:15},
            {id:2, message:"Post2", likeCount:20},
            {id:3, message:"Post 3", likeCount:42},
            ],
            newPostText: "",
        },
            
        dialogsPage:{
            messagesData:[
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
            newMessageText:'',
        },
        sidebar:{
            friendsData:[
                {id:4, name:"Valera", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaCID2Yhnb8G4aOnu8B0XtgEVOwr9mCvzcg&usqp=CAU"},
                {id:6, name:"Kira", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UwUlwr8thOXVXVPeMgCwWgnu9DXvoMHL8A&usqp=CAU"},
                {id:1, name:"Sveta" , icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQtzYwn_6EXyw1Q770iNiEe_RKIwyfqW5oA&usqp=CAU"},
            ]
        },
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log("State changed");
    },
    subscribe(observer){
        this._callSubscriber=observer;
    },

  
    dispatch(action){// {type:"",}

        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
        this._state.sideBar=sidebarReducer(this._state.sideBar,action);
        this._callSubscriber(this._state);

    }
}

export default store;
window.store=store;

let initialState = {
    
    friendsData:[
        {id:4, name:"Valera", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaCID2Yhnb8G4aOnu8B0XtgEVOwr9mCvzcg&usqp=CAU"},
        {id:6, name:"Kira", icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UwUlwr8thOXVXVPeMgCwWgnu9DXvoMHL8A&usqp=CAU"},
        {id:1, name:"Sveta" , icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQtzYwn_6EXyw1Q770iNiEe_RKIwyfqW5oA&usqp=CAU"},
    ],}
const sidebarReducer =(state=initialState,action)=> {
    let stateCopy = {...state}
    return stateCopy;
}
export default sidebarReducer;
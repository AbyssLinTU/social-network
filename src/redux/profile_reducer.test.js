import profileReducer, { addPostActionCreator, deletePost } from "./profile_reducer"

let initialState = { postData:[
        {id:1, message:"Post1", likeCount:15},
        {id:2, message:"Post2", likeCount:20},
        {id:3, message:"Post 3", likeCount:42},
        ],
        
    };
it('new post should be added',()=>{
    let action=addPostActionCreator('it-kamasutra')
    let newState=profileReducer(initialState,action)
    expect (newState.postData.length).toBe(4)
})
it('message of new post should be correct',()=>{
    let action=addPostActionCreator('it-kamasutra')
    let newState=profileReducer(initialState,action)
    expect (newState.postData[3].message).toBe('it-kamasutra')
})
it('delete post test',()=>{
    let action=deletePost(1)
    let newState=profileReducer(initialState,action)
    expect (newState.postData.length).toBe(2)
})
it('after delete post test lenght shouldnt changed',()=>{
    let action=deletePost(1000)
    let newState=profileReducer(initialState,action)
    expect (newState.postData.length).toBe(3)
})
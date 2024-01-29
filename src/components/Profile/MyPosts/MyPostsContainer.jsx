import React from "react";
import c from'./MyPosts.module.css';
import Post from "./Post/Post";
import { PostChangeActionCreator, addPostActionCreator } from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



let mapStateToProps=(state)=>{
   return{
      state: state.profilePage,
   }
}
let mapDispatchToProps=(dispatch)=>{
   return{
     
      addPost:(text) => {
         dispatch(addPostActionCreator(text))
      },
   }
}
const MyPostsContainer= connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
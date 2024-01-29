import React from "react";
import c from'./Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) =>{
  
    return(
      <div className={c.content}>
      
      <ProfileInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}/>
      <MyPostsContainer />
      
    </div>
    
    );
    
}
export default Profile;
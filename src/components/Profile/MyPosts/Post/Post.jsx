import React from "react";
import c from'./Post.module.css';
const Post = (props) =>{
    return(
      
         
      
        <div className={c.item}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8gaNRMVq9hltpqT_lMVJ7AfWUaUMXl_Yig&usqp=CAU" alt="" />
          <span>{props.message}</span>
          <p>{props.likeCount} LIKES</p>
          </div>

      
    
    );
}
export default Post;
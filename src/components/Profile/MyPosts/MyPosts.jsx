import React, { Component, PureComponent } from "react";
import c from'./MyPosts.module.css';
import Post from "./Post/Post";
import { PostChangeActionCreator, addPostActionCreator } from "../../../redux/profile_reducer";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, minLengthCreator, required } from "../../../utils/validator/validator";
import { TextArea } from "../../common/formsControl/formsControl";

const MyPosts=(props)=>{
  /*shouldComponentUpdate(nextProps, nextState) {
    
    return this.props.value !== nextProps.value //|| this.state !== nextState; 
   }*/

    let postsElements = [...props.state.postData].reverse().map((el) => (
      <Post message={el.message} key={el.id} likeCount={el.likeCount} />
    ));
    let addPost =(formData)=>{
    //console.log(formData.postText);
    props.addPost(formData.postText)

//props.changeInput('');
}
  let newPostElement=React.createRef();
    return(
      
      <div className={c.content}>
      
        <div><h3>My posts</h3></div>
        <MyPostRF onSubmit={addPost}/>
        <div className={c.posts}>
          {postsElements}
        </div>
      
    </div>
    
    );
  }
 

const MyPostForm=(props)=>{
  return(
    <form onSubmit={props.handleSubmit}>
       <div>
            <Field component={TextArea}  name="postText" validate={[required,maxLengthCreator(120),]}/>
        </div>
        <div><button >Add post</button></div>
    </form>
  )
}
const MyPostRF = React.memo(reduxForm({ form: 'postForm' })(MyPostForm));
export default MyPosts;
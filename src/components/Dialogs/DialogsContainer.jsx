import React from "react";
import c from './Dialogs.module.css';
import { addMessageActionCreator, changeMessageInputActionCreator } from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";



let mapStateToProps=(state)=>{
  return{
     state: state.dialogsPage,
  }
}

let mapDispatchToProps=(dispatch)=>{
  
  return{
    sendMessage:(text)=>{
      dispatch(addMessageActionCreator(text))
      
    },
   
  }
} 

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
import React from "react";
import { connect } from "react-redux";
import ProfileStatus from "./ProfileStatus";
import { onChangeStatusAC } from "../../../../redux/profile_reducer";

let mapStateToProps=(state)=>{
  return {
    status:state.profilePage.statusText
  }
   
}

export default connect(mapStateToProps,{
  onChangeStatusAC})(ProfileStatus);
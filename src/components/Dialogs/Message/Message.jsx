import React from "react";
import c from './Message.module.css';
import { NavLink } from "react-router-dom";


const Message = (props) =>{
  return(
    <div className={c.message}>
      {props.messageText}
    </div>
);
}
export default Message;
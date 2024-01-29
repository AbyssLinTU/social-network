import React from "react";
import c from './Dialog.module.css';
import { NavLink } from "react-router-dom";


const Dialog = (props) =>{
  return(
    <div className={`${c.dialog}`}>
      <img src={props.iconUser} alt="" />
      <NavLink to={"/dialogs/"+props.idUser}>{props.nameUser}</NavLink>
    </div>
);
}

export default Dialog;
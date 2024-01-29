import React from "react";
import c from'./FriendNav.module.css';
const FriendNav = (props) =>{
    
    return(
      
         <div className={c.item}>
            <img src={props.iconUser} alt="" />
            <span>{props.nameUser}</span>
         </div>
        

      
    
    );
}

export default FriendNav;
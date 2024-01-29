import React from "react";
import c from './Users.module.css';
import defaultIcon from '../../img/defaultIcon.png'
import { NavLink } from "react-router-dom";
import Paginator from "../common/paginator/Paginator";
import User from "./User";
const Users = (props) =>{
   
    return(
        
        <div className={c.users}>
              
               
    
        {
            props.users.map(u=>
                <User user={u} followingInProgress={props.followingInProgress}
                    unfollowTC={props.unfollowTC} followTC={props.followTC}/>)
        }
          <Paginator totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize} currentPage={props.currentPage}
                changePage={props.changePage}/>
    </div>
    );
}
export default Users;
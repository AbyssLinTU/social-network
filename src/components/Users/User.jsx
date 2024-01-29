import React from "react";
import c from './Users.module.css';
import defaultIcon from '../../img/defaultIcon.png'
import { NavLink } from "react-router-dom";
import Paginator from "../common/paginator/Paginator";
const User = (props) =>{
    let u =props.user;
    return(
            <div key={u.id} className={c.user}>
                <div className={c.leftUser}>
                    <NavLink to={`/profile/${u.id}`}>
                        <img className={c.photo}src={u.photos.small != null ? u.photos.small: defaultIcon } alt="icon" />
                    </NavLink>
                   
                    <div>
                        {u.followed ?
                        <button className={c.FollowingButton} disabled={props.followingInProgress.some(id=>id===u.id)} 
                        onClick={()=>{props.unfollowTC(u.id)
                        }}>unFollow</button>:
                        <button className={c.FollowingButton} disabled={props.followingInProgress.some(id=>id===u.id)} 
                        onClick={()=>{props.followTC(u.id)
                            }} >Follow</button>}
                    </div>
                </div>
              
                <div className={c.rightUser}>
                    <div className={c.description}>
                        <span>{u.name}</span>
                        <div className={c.status}>
                            <span>{u.status}</span>
                        </div>
                        
                    </div>
                    
                    <span className={c.location}>{"u.location.country"} {'u.location.city'}</span>
                </div>
                

            </div>
       
    
    );
}
export default User;
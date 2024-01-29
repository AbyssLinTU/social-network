import React from "react";
import c from './Nav.module.css';
import { NavLink } from "react-router-dom";
import FriendNav from "./friendNav/friendNav";
const Nav = (props) =>{
  let friendsElement
  if(props.isAuth){
    friendsElement= props.state.friendsData.map( el => <FriendNav key={el.id}  nameUser={el.name} iconUser={el.icon} />)
  }
  else{
    friendsElement=props.state.friendsData.map( el => <FriendNav />)
  }
  
  //
    return(
        <nav className={c.nav}>
        <div className={c.item}>
          <NavLink to="/profile" className= { navData => navData.isActive ? c.active : c.item }> Profile</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to="/dialogs" className= { navData => navData.isActive ? c.active : c.item }>Messages</NavLink> 
        </div>
        <div className={c.item}>
          <NavLink to="/news" className= { navData => navData.isActive ? c.active : c.item }>News</NavLink> 
        </div>
        <div className={c.item}>
          <NavLink to="/music" className= { navData => navData.isActive ? c.active : c.item }>Music</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to="/settings" className= { navData => navData.isActive ? c.active : c.item }>Settings</NavLink>
        </div>
        <div className={c.item}>
          <NavLink to='/users' className={navData => navData.isActive ? c.active : c.item}> Users</NavLink>
        </div>
        
        <div className={`${c.item_friends}`}>
          <span className={c.spanFriends}>Friends</span>
          <div className={c.navFriends}>
            {friendsElement}
          </div>
        </div>
      </nav>
    );
}
export default Nav;
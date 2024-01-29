import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { LogoutTC } from "../../redux/auth_reducer";
class HeaderContainer extends React.Component {
  
  render(){
    return <Header {...this.props}/>
  }
    
}
const mapStateToProps=(state)=>({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
})

let HeaderContainerAp =connect(mapStateToProps,{LogoutTC})(HeaderContainer);
export default HeaderContainerAp
import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { getUserProfileTC, onSetStatusAC, onSetStatusTC, updateStatusTC } from "../../redux/profile_reducer";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
class ProfileContainer extends React.Component {
   componentDidMount(){
    
    let userId = this.props.router.params.userId;
    //let userId = 20000;
    if(!userId ){
      userId=this.props.id;
      if(!userId){
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfileTC(userId)
    this.props.onSetStatusTC(userId);
    }
    render(){
      return  <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusTC={this.props.updateStatusTC}/>
      
    }
      
    
    
}

let mapStateToProps=(state)=>({
  profile: state.profilePage.profile,
  status: state.profilePage.statusText,
  id: state.auth.id,
  isAuth:state.auth.isAuth
});
//снизу работает как withRouter
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}


export default compose(
  connect(mapStateToProps,{getUserProfileTC,onSetStatusTC,updateStatusTC}),
  withRouter,
  withAuthRedirect,
)(ProfileContainer)
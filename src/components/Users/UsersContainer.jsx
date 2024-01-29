import React from "react";
import { connect } from "react-redux";
import { getUsersThunkCreator, followTC, unfollowTC } from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users_selector";


class UsersAPIСomponent extends React.Component{
    
    componentDidMount(){
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)
        /*this.props.toggleIsFeching(true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
        .then(data => {
            debugger
            this.props.toggleIsFeching(false);
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount);
        });
        */

    
    }
     getUsers=()=>{
        //<button onClick={this.getUsers}>Get User Data</button>
    }
    changePage=(currentPage)=>{
        this.props.getUsersThunkCreator(currentPage,this.props.pageSize)
        /*this.props.toggleIsFeching(true);
        this.props.setCurrentPage(currentPage)
       
        usersAPI.getUsers(currentPage,this.props.pageSize)
        .then(data => {
            this.props.setUsers(data.items)
            this.props.toggleIsFeching(false);
            //this.props.totalUsersCount=response.data.totalCount;
        });
        */


    }
   
    render(){    
        
        return(<>
            {this.props.isFetching ? <Preloader/> : null}
           <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} 
            currentPage={this.props.currentPage} changePage={this.changePage.bind(this)}
            users={this.props.users} 
            followingInProgress={this.props.followingInProgress} 
            
            followTC={this.props.followTC} unfollowTC={this.props.unfollowTC}
           />
        </>
          
        );
        
    }
}

let mapStateToProps=(state)=>{
    return{
        users:getUsers(state),
        pageSize:getPageSize(state) ,
        totalUsersCount:getTotalUsersCount(state) ,
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}
/*

let mapDispatchToProps=(dispatch)=>{

    return{
        Follow:(userId)=>{
            debugger
            dispatch(followAC(userId))
        },
        unFollow:(userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount:(totalUsersCount)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setCurrentPage:(currentPage)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        toggleIsFeching:(isFetching)=>{
            dispatch(toggleIsFechingAC(isFetching))
        }
    }
}
*/


export default compose(
    connect(mapStateToProps,{
        getUsersThunkCreator,
        followTC,unfollowTC
    }),
    withAuthRedirect
)(UsersAPIСomponent)

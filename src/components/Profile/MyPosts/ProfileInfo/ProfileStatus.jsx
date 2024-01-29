import React from "react";
import { Field, reduxForm } from "redux-form";

class ProfileStatus extends React.Component{
    //newStatus = React.createRef();
    //локальний стейт для компоненті
    state={
        editMode:false,
        status:this.props.status
    }
    activateMode(){
        
      this.setState({
        editMode:true
      })  
    }
    deActivateMode(){
        
        this.setState({
          editMode:false
        })  
        this.props.updateStatusTC(this.state.status);
      }
      onChangeStatus(e){
        let text = e.currentTarget.value;// вместо ref
        this.setState({
            status:text

          })  
        //this.props.onChangeStatusAC(text)//redux автоматично делает callback
      }
    componentDidUpdate(PrevProps,PrevState){
        if(PrevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
    
              })
        }
    }
    render(){
        return <div >
        {!this.state.editMode ?<span onDoubleClick={this.activateMode.bind(this)}>{this.props.status?this.props.status:"Введіть статус"}</span>


        :<input autoFocus  onChange={this.onChangeStatus.bind(this)} onBlur={this.deActivateMode.bind(this)} value={this.state.status} type="text" />}
        
        </div>
    }
}

const ProfileStatusF=(props)=>{
    return(
        <Field autoFocus onBlur={props.deActivateMode}
         name={'statusInput'} component={'input'} />
    )
}
const ProfileStatusRF=reduxForm({form:'statusForm'})(ProfileStatusF);
export default ProfileStatus;
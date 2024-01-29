import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, minLengthCreator, required } from "../../utils/validator/validator";
import { CreateForm, Input } from "../common/formsControl/formsControl";
import { connect } from "react-redux";
import { LoginTC } from "../../redux/auth_reducer";
import { Navigate } from "react-router-dom";
import c from "../common/formsControl/formsControl.module.css"
const LoginForm =({handleSubmit,error})=>{
    return <form onSubmit={handleSubmit}>
            
                {CreateForm("email","login@gmail.com",Input,[required,maxLengthCreator(30),minLengthCreator(4)])}
            
                {CreateForm("password","Password",Input,[required,maxLengthCreator(30),minLengthCreator(4)],{type:'password'})}

                {CreateForm("rememberMe",null,Input,[],{type:'checkbox'},"remember me")}
                
           
            {error && <div className={c.formErrorDiv}>
                {error}
            </div>
            }
            
            <div>
                <button>Submit form</button>
            </div>
        </form>
   
}
const Login =(props)=>{
    const onSubmit = (formData)=>{
        props.LoginTC(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth){
        return <Navigate to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const LoginReduxForm= reduxForm({form:"Login"})(LoginForm)
let mapStateToProps=(state)=>{
    return{

        isAuth:state.auth.isAuth
    }
}

  
  
export default connect(mapStateToProps,{LoginTC})(Login) ;
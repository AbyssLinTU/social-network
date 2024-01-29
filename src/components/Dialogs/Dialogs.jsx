import React from "react";
import c from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { TextArea } from "../common/formsControl/formsControl";
import { maxLengthCreator, required } from "../../utils/validator/validator";

const Dialogs = (props) =>{
   
   let dialogsElements=props.state.dialogsData.map((i)=><Dialog nameUser={i.name} idUser={i.id} key={i.id} iconUser={i.icon}/>);
   let messagesElement = props.state.messagesData.map((el)=><Message messageText={el.messageText}/>);
   //let sendMessageEl = React.createRef()
   let sendMessage = (formData)=>{
      console.log(formData.inputMessage);
      props.sendMessage(formData.inputMessage)
      
      
   }
   /*
   let changeMessageInput =()=>{
    
    props.changeMessageInput(sendMessageEl.current.value)
    
    
   }
   */
    return(
      
      <div className={c.dialogs}>
        <div className={c.dialogs__items}>
          {dialogsElements}</div>
       <div className={c.messages}>
        {messagesElement}
        <div className={c.sendMessage}>
          <DialogsReduxForm onSubmit={sendMessage}/>
        </div>
        
       </div>
      </div>
        
    );
}
const  DialogsForm = (props) =>{
  // <textarea onChange={changeMessageInput} ref={sendMessageEl} value={props.state.newMessageText}></textarea>
   return(
       <form onSubmit={props.handleSubmit} >
        <div>
          <Field name="inputMessage"  component={TextArea} validate={[required,maxLengthCreator(70)]}/>
        </div>
         <button >Send</button>
       </form>
       
   );
}
const DialogsReduxForm=reduxForm({form:"dialogs"})(DialogsForm);
export default Dialogs;
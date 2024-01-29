import React, { useState } from "react";
import { useEffect } from "react";
;
const ProfileStatusWithHooks =(props)=>{
    //let stateWithSetState = useState(true);
    //let editMode=stateWithSetState[0];
    //let setEditMode=stateWithSetState[1];
    let [editMode,setEditMode]=useState(false)
    let [status,setStatus]=useState(props.status)
    useEffect(()=>{
      setStatus(props.status)
    },[props.status])
    const activateMode=()=>{
      setEditMode(true)
    }
    const deActivateMode=()=>{
      setEditMode(false)
      props.updateStatusTC(status);
    }
    const onChangeStatus=(e)=>{
      setStatus(e.currentTarget.value)
      
    }
        return <div >
        { !editMode?<span onDoubleClick={activateMode} >
          {props.status?props.status:"Введіть статус"}
          </span>


        :<input autoFocus onChange={onChangeStatus} onBlur={deActivateMode} 
        value={status}  type="text" />}
        
        </div>
    }


export default ProfileStatusWithHooks;
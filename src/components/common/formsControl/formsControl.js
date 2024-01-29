import React from "react";
import c from './formsControl.module.css'
import { Field } from "redux-form";


/*
export const FormController=({input,meta,child,...props})=>{
    const hasError = meta.touched && meta.error;
    return <div className={c.formСontrol+' '+ (hasError && c.error)}>
                <div> 
                    <props.element {...input} {...props}/>
                </div>
                {hasError&& <span>{meta.error}</span>}
    </div>
}

export const TextArea=({...props})=>{
    return <FormController {...props} element="textarea"></FormController>
}
export const Input=({meta,...props})=>{
    return <FormController {...props} element="input"></FormController>
}
*/
export const TextArea=({input,meta,...props})=>{
    const hasError = meta.touched && meta.error;
    return <div className={c.formСontrol+' '+ (hasError && c.error)}>
                <div>
                    <textarea {...input} {...props}/>   
                </div>
                {hasError&& <span>{meta.error}</span>}
    </div>
}
export const Input=({input,meta,...props})=>{
    const hasError = meta.touched && meta.error;
    return <div className={c.formСontrol+' '+ (hasError && c.error)}>
                <div>
                    <input {...input} {...props}/>   
                </div>
                {hasError&& <span>{meta.error}</span>}
    </div>
}
export const CreateForm=(name,placeholder,component,validate,props={},text='')=><div>
    <Field name={name} placeholder={placeholder}
     component={component} validate={validate} {...props} />{text}
</div>
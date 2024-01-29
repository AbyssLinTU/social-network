export const required= value =>{
    if(value) return undefined;
    return "Field is required"
}
/*
export const maxLength30=value=>{
    if(value&& value.length>30) return "Max simvol 30";
    return undefined
}
*/
export const maxLengthCreator=(maxLength)=>(value)=>{
    if(value&& value.length>maxLength) return `Max symbol ${maxLength}`;
    return undefined
}
export const minLengthCreator=(minLength)=>(value)=>{
    if(value&& value.length<minLength) return `Min symbol ${minLength}`;
    return undefined
}



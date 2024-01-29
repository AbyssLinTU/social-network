import React, { useState } from "react";
import c from './Paginator.module.css';
import arrow from '../../../img/Arrow_Right_NonActive.svg'
const Paginator = ({totalUsersCount,pageSize,currentPage,changePage,portionSize=15}) =>{
    let pageCount=Math.ceil(totalUsersCount/pageSize)
        let page=[]
        for(let i=1; i<=pageCount; i++){
            page.push(i);
        }
   let portionCount=Math.ceil(pageCount/portionSize)
   let [portionNumber,setPortionNumber]=useState(1);
   let leftPortionNumber=(portionNumber-1)*portionSize +1;
   let rightPortionNumber=portionNumber*portionSize;
   
    return <div className={c.page__menu}>
            {portionNumber>1 && <button  className={c.leftButton} onClick={()=>setPortionNumber(portionNumber-1)}></button>}
            {page.filter(p=>p>=leftPortionNumber && p<=rightPortionNumber 
            ).map((p)=>{
                return(
                    <div className={currentPage===p ? c.selectedPage:c.button_page} 
                    onClick={()=>{changePage(p)}}> 
                    <span >{p} </span>
                    </div>
                    
                    
                )
            })}
        
        
            {portionNumber<portionCount && 
                 <button className={c.rightButton} onClick={()=>setPortionNumber(portionNumber+1)      
                  }></button>
                 }


        
     </div>
}
export default Paginator;
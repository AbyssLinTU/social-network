import React from "react";
import c from'./ProfileInfo.module.css';
import Preloader from "../../../common/preloader/preloader";
import defaultIcon from "./../../../../img/defaultIcon.png";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusContainer from "./ProfileStatusContainer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
const ProfileInfo = (props) =>{
    
    if(!props.profile){
        return <Preloader />
    }
    else{
        return(
      
            <div>
               <img src='https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=sph'  />
           
               <div className={c.description_block}>
                   <img src={props.profile.photos.large==null ? defaultIcon : props.profile.photos.large}/>
                   {props.profile.fullName===null ? 'Name':props.profile.fullName}
                   <div>
                        {props.profile.aboutMe===null ? 'About me':props.profile.aboutMe}
                        <div>
                            <ProfileStatusWithHooks status={props.status} updateStatusTC={props.updateStatusTC} />
                        </div>
                   </div>
                   <div>
                        Contacts
                        <ul>
                            {!props.profile.contacts.facebook?'':<li>{`Facebook:${props.profile.contacts.facebook}`}</li>}
                            {!props.profile.contacts.website?'':<li>{`Website:${props.profile.contacts.website}`}</li>}
                            {!props.profile.contacts.vk?'':<li>{`vk:${props.profile.contacts.vk}`}</li>}
                            {!props.profile.contacts.twitter?'':<li>{`Twitter:${props.profile.contacts.twitter}`}</li>}
                            {!props.profile.contacts.instagram?'':<li>{`Instagram:${props.profile.contacts.instagram}`}</li>}
                            {!props.profile.contacts.youtube?'':<li>{`Youtube:${props.profile.contacts.youtube}`}</li>}
                            {!props.profile.contacts.github?'':<li>{`Github:${props.profile.contacts.github}`}</li>}
                            {!props.profile.contacts.mainLink?'':<li>{`MainLink:${props.profile.contacts.mainLink}`}</li>}
                        </ul>
                   </div>
               </div>
            </div>
           
   
         
       
       );
    }
    
}
export default ProfileInfo;
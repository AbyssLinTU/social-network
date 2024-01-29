import axios from "axios";

//'0c8d571f-29d9-4cc0-99b6-1234bf2f4248'
const instance=axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    withCredentials:true,
    headers:{
        'API-KEY':'5595e0bd-dcf2-435b-bce1-0b2806294b57',
    }
})
export const usersAPI={
    getUsers(currentPage,pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        {withCredentials:true})
        .then(response=>{
            return response.data
        })},
    getUnFollow(idUser){
    return instance.delete(`follow/${idUser}`,
                            ).then(response=>{
                                return response.data
                            })
                        },
        
    getFollow(idUser){
    return instance.post(`follow/${idUser}`).
    then(response=>{
        return response.data
        })
    }
}
export const profileAPI={

    getUserProfile(userId){
       return instance.get(`profile/${userId}`)
        .then(response=>{
            return response.data
        });
    },
    getUserStatus(userId){
        return instance.get(`profile/status/${userId}`)
         .then(response=>{
             return response.data
         });
     },
     updateStatus(status){
        return instance.put(`profile/status`, {status:status})
        .then(response=>{
            return response.data
        })
     }

}
export const loginAPI={
    setLogin(){
        return instance.get(`auth/me`,{withCredentials:true}).then(response=>{
            return response.data
        })
    },
    Login(email , password , rememberMe = false){
        return instance.post(`/auth/login`,{email , password , rememberMe}).then(response=>{
            return response.data})
    },
    Logout(){
        return instance.delete(`/auth/login`).then(response=>{
            return response.data})
    }
}


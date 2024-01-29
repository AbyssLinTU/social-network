import jora from'../img/photo1704628263.jpeg';
import jenya from'../img/msg1229307467-192261.jpg';
import { usersAPI } from '../api/api';
import { updateObjectInArrayState } from '../utils/object_helper';
let FOLLOW="network_app/users/FOLLOW";
let UNFOLLOW="network_app/users/UNFOLLOW";
let SET_USERS="SET_USERS";
let SET_CURRENT_PAGE="network_app/users/SET_CURRENT_PAGE";
let SET_TOTAL_USERS_COUNT="network_app/users/SET_TOTAL_USERS_COUNT";
let TOGGLE_IS_FECHING="network_app/users/TOGGLE_IS_FECHING";
let TOGGLE_IS_FOLLOWING_PROGRESS="network_app/users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState={
    users:[
        //{id:1,followed: false, userName:"Dmitry K.",status:"Im a boss",location:{country:"Belarus",city:"Minsk",},photoUrl:`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgVFRIYGBgYGBgYGBgaGBgaGBkYGhgZGRgZGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQhJCs0NDE0NDQ0MTQ0NDQ0NDQ0NjQ0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOQA3QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAQMEBQYHAAj/xABAEAACAQIDBAcGBAQFBAMAAAABAgADEQQhMQUSQVEGImFxgZGhBxMyQrHRFMHh8FJicoIjkqKy8RUzQ7M0Y3P/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAjEQACAgICAgIDAQAAAAAAAAAAAQIRAyESMUFhMlEEE0Ii/9oADAMBAAIRAxEAPwDoFo5S1gkQ6YgA7PPpCiOMoxDUOnBEOnENjkFxDAguJQhuHTg2hpJQMMCQ8djVTLVuXLvhY7E7gy+I6dnbKRkubk3vInk46RviwuW30DW2jUPzW7so0u0Kq5h287+hjjpIdfKYc2dP6UWdHb9QfGAw8j9pc4HaFOr8DZ8VOR/WYZ35xsVSpDK1iOIyPhNI5H5OfJhro6CREtK7Ym0vfJZvjXXtHOWdpsYCgTxh2gmUIbcZRqPVNI3aJgImsOeQRTGgBIgPpHIDjKMBgwYbCDEA4RnDWARnHEkjHgIj6QoLRiGhHacbEcpxDHILw4D6RiG4amwJOggRnaD2pt22HmZLdKykraRV16xdix8OwcIVJLyOhk2nUE5FtnqKoxpAVqYBEq8eljLVzc6cZAx6EwYkUNV8zIpewkqshz7pW4hgMrwiTNFrsLaBSqp4Xse46/vsnRLTkVF7EWN51fZ1Tfp02OpRb99s51Qdo4MkaZKIgkQ2gGaGYFTQRsxx+EbiYCpxnjFTjFjACC+gh2iVBkIAMEQbQyI2RygA6wzhLEOsISRj0Rp6KYxDQjlPWAIVOIY5EfSKIjxiAEjbVS9InkQfW35yVKzb+28JhqbCvWVCykKt7ueRC668ZLVpoqLpplbSW8m0lAGsxDdN6CjqI721bdIXwJkN/aIl/wDt+p+05VCR6H7o1tnRGIUXJlTtHGIguzATE4r2hoUISmxYmwubAdp5zJY7bmIxD3J45AcJag32RLMl8dnQcTt7DqTdx33HpKrD46niaq0aLrvsTa5sLAEk+QvMe+BqXud21tSLse8mWWwqdRa6DfICqzpu9WxPUbMZ5hj5x8Yohzm9UaR6YQkX3rE24BrHLLXOa/o/0xpM9DDe73d5QgJN+uBfloTkOMxWVzfjGujlBnx9JLEFayNf+VW3j6CPltUSsa3y2dyaNGOsY206DlG34QLQ34QDEASDWLaInGKYwEtAqcIcCrwgA0YJitEJiAcbWeE8+sQRDHxPHSKJ4xiGxCp6wRCTWIY6ILxYjxiBExHtJ6Ne9pPi6YvUp0wHTdU+8pKxZgGILIwBY3W1xlyttxHEGVjnEM4ltHYKsq+6JKNushvclGAZMzqbESqrbDUtkhB8bDwm/wBq7Fr4JiKO5Uw7FmpoxKPSubtTDWIZLsSOI0lW1LGVuqlFKQORfeLvbsuAFPbnMHcX2dkFGUU62MdFdi0GwFV2pqzO7qWIuwVTuqFOo0v3mZHC4JaNbdqkKrZq5yU950BnXdjbLFPDGgDkBbLvuZk8fhaYd94qyDRGsQRx14yeezT9SpfaGPwOGVd569O1r231+gMrPxKNVLoLIqFFOm9dgWIHLqjOajD7Gwe6GGGQEi4Nr5dkq9o4dAbKoHdFyXgfFpbIFZrqLS+6DYffxqODmm8T/TuG1v7j6zOIDf0nTegWykSkK9yzuGFjayANYhe/dBlwVswyS4p+zWNGzDYwJ0HIA/CDFeBAA10niYinKeJgAMSpFgVDnAAGMG8U2iCCAdeIJ59Z4RDH1imCsIwENwkgwkgMcER4oiMICBh04IENBAZA2/ht+iSNU648Pi9CZncK+WU2pW+R0mJxGHNF3pnLUoeanQiYZo+Tp/HnToZ2zjKlKmTTYE53H2nPPwVSrULuWy1W/nNpVDuTamCBlvM1lB8Lk6yNiKSIP8TEIl/lpgBu7eOY8pkjrab2xsY9lVUC6DLstGMQwdN85G9iO0SLRoUy5cAkD5mYkk9m9pGtp4oBN1TxzhWyZaRCq1ADkZ2Tooo/CULcUv4m5PrOGs9yM/3edG6HdJ1pbtGs3UPwNa+4TqD/AC/SbQai9nLkTktHQiIJENGVgGUhgcwQbgjsM8Vm5zEdxAMeqLGmEQCKcvGITFtlAMYC3jbtFvAfWIBCZ5YJM8pgA808J5p4QGPrCMERbwEAISawRDpjOAxwCKyxxVlB0w6T0sBTBZC9R77lMG17asx+VRzgBdhI4iTjuL9qGMdbJTpUzzszkd28bX8DMxj+k2PrKyVMXUdWtvKSApsb5gAcYUB9DfjKIYJ71N45Bd9d4nkBe5mV6c7d2fTTcq1gKy5oqAu6kj5wvwqe2cFq1mByyIsQRkQRmCCNCI0KzM28xJJJOZueZJPEkwavTBOnaOs7N2mHUKGyOd+cHE7Hos92uxyzvlM/0Swhq0nYMQ6VDYnMfAhz5i945tHGYlDZkzHEaHutOVxSk6O6M24ptE/F11pi26At7ZWmPx2OLsQMhfOFi69Zz1ifX6mM08KdfXh+plKkTJykx3DXJuZeYAFha2Yy9QZBwWFJOkibQ20FBSiczkzjgOIT7+UVOT0JtRWzQYrplVwh93hqnXHxk9ZF7N3Rm+kc2V7VcanVq00ri5JLXR8ze28vVsP6Zz0Q1E6Ix4qjmk7dnddme0bZ9a2+zUW4hxdb9jrw7wJpcJi6NZd6lVR11ujhh6T5qC3/ADknD13ptvpUZGGhRirD+4ZiVRB9Ilco2ROS7D9o2KpgLWArIOLHdcD+sDPxHjN/sbpZg8TYJUCOfkchW/tzs3hAC3aNuc464jDmIYBMVWgkwQYgJjCeWeeeWAD4MKCsICMBFEJ6iIrO7BUUFmYmwVRmSTBLBQWYgAAkkmwAGZJPATintC6cNjG/DYe4oq2baGqRox5KNQPHlEBpekPtaRWKYOlvnT3lQGx7UQWNu1iO6cu2jtvEVnL1CzsxJJYknuHIdggU8KEz1a2Z+0Qpp3XlUKxlcbzWOjFIeMbemNOMboYQu6IuRd1QHtZgo+sA7LDA7IxGJJFGmXAtvNoi303mOUgVMO1Oo1Nrbykg2Nx4Gdm2/wBEqnv6f4BhQU0wlcW/w91RZW3Rq2QyHEXyzMwu2+gOOoMzgCupJJZMm7yp/ImZqabNnjaj1sHoTtb3dT3bfDUOvJuE6FjMEHGaX8pxfMHiCD3EEfQzq3QzpEMSnunI96gseG+vBx285nlh/SNcE18WQ62x1LZJ4WgYrZqopZ7Kqi9joAOLH8psa5REZ3YKqi7McgAJynpX0ibEvuJdaSnIcXI+d/yH56Zxg5M3yZIwXsrtqbWL3RCVTidC/wBl7P8AiVai0Pc4T1rnsE64xUVSOCUnJ2wUHGPoIKiHaUQevEZuHAaxHawv5d/CNDlqB6njAB0vx4cB955XbnaB+7xN7l5wA6H0D6ZVEdcPiam9TbJHc3ZHy3VLfwHTPTLhOm1NZ84q1p3foxtL8ThadU/EV3X/AK0O6x8bX8ZLGWLGJeIxgb0QFk88s888IMB5Y4ojax5IwMH7XtotTwS01axrVAjdqKCxHcSFHjOMbMS7M54ZeevpOje2fGXrUaQPwU2c99RrD0T1mCwlPdTtPWPjpGhMcPGR3a3fpHmey37JDcXJHd5cYwEZzew8TLXosrDGYbdG83vkytfLeF8uwXPhK4JbIanMmdJ9lOy6ZFTEHNwxpp/KN1WZh2neA7geciTqLZeONySR0nFuxAVBcnU3yAlViHqUUZi2/nfdA0HEdvGS8ZilpLd3IHPh42maxHSHCOwpCou817dYZ27ec5T0UqRQdKdg0sTuV6RCFr7/AFbjL+MAi2eV5g8DVNOspLbrI9rgnqkG18syL621FxN50iTEYcO9GoCjizqRfdytvqe0Wv3TmVNrsT2k355zfE20cmdJNPyabpD0jrYmyM43F+VbhGYfNYkkjlfvyvlSAcYlMcTrCmqSXRzuTb2ITleIqw2ESMR5YpMSINYAJUP77TANgP35CIrXJI55feFYDXzgANr66cvvCiX5CCYAevOo+yfFE069MnJXRwOW+GDW/wAgnLbzbeyzFbuJdP46ZH9yEMPTeksZ1WpGjHHMaJiAtWiiI0UQAdWPJGEjqtGBwb2mYk1MfVX+EpTHcqqD/qLSkq5aafSFjsT7/FVauoNR3v8A1Md0eX0iOY0JkWq/VIiUBlfnYeUSqDHcNmojAULadQ9lIPuKn/7N/wCunOYNOp+ytCMM7HRqjEf5VU/7Znk6NsHyHPaA1TcIQgWGeRJPcb5es5fszZ71DkL2N79us610tzUjsmW6Lqqh8tCZzxdWdjVtWO7V2rSoUgHG8jC26LEhuIsTpOaO6l2KruqWJVdbAnIX7BL7phURqu6vDM/QfvslHTpzfHGlZy55W6+iSsKIoizU5wYkWITABDBDWueQM80bq/CQNWIEAFwynd5XzhECPIlgBygNABokwSIZgGIYJl10Rxfu8ZQf/wCxVPc/UP8AulKYdCoUYMNVII7wbiID6IeMkxKdYOiuNHVWHcwBH1iEyB0W7QlgmEsoQ6ki7YqlMPWZQSwpuVA1LbpsB23khZDxuIudwafMfyilJRVsuEXKVIwuwuglEYdVrA+8brM6mxUkABRwIAHLW8h4/wBm1UZ0a6N/LUBU/wCZbg+QnRKYtCapOZZZWdksMaqji2O6F7QS4/D7w5o6EerA+kpvwtSldKlNkYHRhY25zuOOxHbMHtXDe8r75UEbpRL3+MnqnIHIcSfrN45G3swngSVoy+zdj18Q4SnTY3z3iCFA5ljladm2NsxcNh0pL8ozPNjmx8zGtj0KeHS17sc2Y5kkfQdnCLtLagVSSZE52a48SgvZT9JanVOc5/8A9UFAOb5nIDiTLTbm1uozsdT1Rfh9zMDVrM7bx8ByEUI3sMuTiqXY61RnYs2pNz9o+ixmmI/OpI4m7CEQxFM8TAQhiGKTAMABc5GafoHsFMXX/wARSadNd5hci7NkouOFgx8BMu07D7MMEEwiuR1qrFz3fCvovrM8kqia4o8pbLl+iGzbf/ET/VfzvKLaHQTAtfcV0/pckeT3m1dpX13nNzl9nXwg/BzjF+z1x/28QD2Otv8AUv2mfx3RPGU9aYcc0YN6Gx9J0el0ioObElD/ADDI+Iyj9WqGFwQRqCM790t5Jx7IWLHL4s4tWpOhsysp5MCD5GN706jtBUcEMoYdovMptPYdMhmTqEAm3ymw9JccqfZlPA49Ozp2wWqHDUfefH7tN7Tlle2V7Wv2yYTI2ynDYeiwyBpUyB3opjxMoyLwxQYJjdesEUseH7EolbPYvFbgsPiOnYOcgoQMz5mQGqVGJY5X/dorULnMk9/fOScnJ+j0cUFCPsnNjqY1YeGf0kattROG8b6WUxk0Rcr3/YQqNMC1+VpKLbGWps/xCy8r5+No1jqF6VlNmXlxAPwkciMvKSK2JC5X5/pIrVdWPDTx4GUnTslpNUxjZm0N9N9zZxcG+V7G1/G0z3SXawvu3y48pJ27VQAsFXeJ+IbwPpr4/wDGA2tjFYsoYEcwDfXQ3Jt4TWMVJ6MZ5HFU+yNtDGtWbM9UZKOHfAp04NCnJCrN4qjkbbdsJFniYtp60okRYF4cBxAAd+JvRGEC8QwnbK8750aohMNSQfLTQf6ROC4WgXqIn8bovdvMF/OfQ2GAVQBoBYTDM9I6fxltsLE1d0E8ACfKc+bb+IswLghgRmBcA8iJva9jkbG+UxvSfC0aYUooVmJ00sBnlpqRJxON00XnUq5J1RmXE1lB0FNFRgwVQLgg52zmXSmzndUXPIdmclbEosHcsCN1bWOWZP6Ga5UnEwwSal12TcS0b2ZQD1kQgFSesDmCozII5Wg4upLLotQuzOflFh3n9B6zCK2dGWVJmnYxu88xgXmxyGhaQdrHqDlvC/kbSaY1iaO+hXS4yPI8DHJWmgg6kmUi1fp9IW/cH9+MioGBKkZgkHvEcdrC/IzkPQux1qgFzxFvz+0i4nFZ9n7/AEkfEVGNwvHT854LbXu+ggVQTpcZ9/0kfH4gAHPTP7RzEYgeczm2toKqkk5ARoPZT7exDv1FBLNe1uA5zKDDlSQwsQbETb+zjG++xbI6g76FlP8ADu2y7rH0mh6c9EldffUl64HWAy3wOFufbOiL46ZyTjzXJHM0XKFae0y/YM9ebnKIJ6enrwAQxDFiEwAbIgERwyVhtmV6nwUmbtsbeZyibS7KSb6B2HYYmgTp76n/AL1t62ndUriwE5JgOiGM30cqi7rK+bG/VYHgDynS6FIrdmN/yE5c0k6pnZ+PFxTtUTXeYTpJiy9ZhnZBuj6k+f0mzVzaVm08JTqizrfkdGHcZGOSi7ZeaDlGkUfRqnm9Q8OqPqfyk3HYgQ6dJaSBF0HHmdSTKXHVSTHKXKVhCPGNDFR94zbbJwvu6SrxPWbvPD6DwmZ6OYLffeYdVMz2n5R+fhNixlxRzZZW6EYxsmExjd5ZmaUwhAhCaEFHVKlmbiSTIGJfO3OSNq02pucuq2a/mJSvjQNZxyTT2ejCnFNE07qDPu85ErYoX5yp2jtpRqwA5kgShxPSakMlZm7gbeF4KLfSKlOMe2X+MxoF+EyNctjKnu6Z6q2/uPPuErdo7WerkOqvHPM98n9CQv4pQzFSQ272tkbHwBm0cbirfZzyzKUlFdHQOgvRFcM/v3cs9iqjQKpte/MmbysAwzlbSfdzGhA87QMdUZkKI4DkFSb5rdQwYWPAEeY4kRW2zT/MVSOddPNiik/vkHVc9ccmOh8ZkLzpWL6K7+8Hq1HZxZmZstMiFGQtlKev0EtpXPdu3/OaRyRSpnPLDJu0jGXniZt8H0FuevUuBmflA7zLbDdC8OCDbeHMnLtjeaPgSwS86OaUKbuwVFLE8ALzSbM6HVn6zncXjldvDtnQMJgsPTuEUDMrkM8rXItrLBc7bqXFri+Q+8zllk+tGkcMV27M9srolh6dj7veYZ7z5kd3CXyYdFysABDpKwFi/G+XpmYDMgz48L5/WZPfbNo0ulQTW1H6RtmHPhnGnxF4yrFtIqRfJhvUytImZMmijlnI9U2BgKyox9W1xM9VJZrDOWe1a0e6NYDeb3rDJT1e1v0jirJnKkX+ysJ7qmF+bVu/9NJLJiEwSZscTdnmjZMJjG4wNPeEsCGs0IFrYVKi7ji4PgQeYPAzi3S/GPTxNWgjdVG3Qx+I5Am/DUnyncKc+e+klbfxNd+dap5b5A9BEopvaKUpRVJlBiWJa5JJ7YyY9iNRGZRIoljsHEe7xFJt3es69Xib9Ww7c5AVZJwRKurKbMhDg8mU3B84VY06dnclxC57puBqOIHI9sg9H6lMq9RSbu51tvZc/Qf2yNhOlWDrItytOqdVOVz/ACtoYGA3Kbum8QG64vobsxyPH4iD3LOV2tHcmm010XbV8yL3Iz+wjIJZtOdiT62jTMqjeLCxz/fbITbTRbAHTj9ZNmrLtUGYvlbQWzPMkx5UTiL3PE5Z8LaTPJtRcs+z7R07WGWetrRWS4l/vqOGQjRxGXhKT/qgsc9Y2NoXuA3D1vFyDiXNSpoQez7fT0kWo46olY20Mr3z4jtiJit7TS8LHxLikgMmU6cp0x6rqYLbZUZXjsOLLqs6qDM/j8XeRsTtYG9jeVlXa1JfidVPIkD04w7HpdgNRerUVRqxsPvNnh6KogRdFFv1mV6J7Up1sRUUZ2S6Nzs1msPFZrmm0Y0ceWSk9CFoG9EYwS0ZkETA3ohaBeAGshrPT01IJFOfN+O+N/6m+piT0aArMRqI2s9PQAdWScLqe6enoASWQHURxcZUQAK5seBzAy4A6T09CY4kdto1m/8AIw10Nh5Rk7WxA/8AK3nPT0ika2xU2ziAb79+8CWOH23WOpHlPT0maRUW7L7C4tjqB6/eSaa694np6c7OjwiXTbsECtjmAyC+R+89PRI08EGtj37B3CZ/aG2ao03deR+8SemmPsxm3xKittGs2tQ25DIekirFnp0xRxyZpegTkYynbiHB7t1vsJ1epPT0iXYIaaNmenpIwTEnp6AH/9k=`},
        //{id:2,followed: true,userName:"Jenya K",status:"Я захватил Чехогерманию в 48 году, а ты чего достиг?",location:{country:"Ukraine",city:"Dnipro",},photoUrl:`${jenya}`},
        //{id:3,followed: false, userName:"Жопа Кравченко",status:" Я могу кастовать метеор дожди. Ты от них потеряешь сознание",location:{country:"Ukraine",city:"Dnipro",},photoUrl:`${jora}`},

    ],
    pageSize: 5,
    totalUsersCount: 17,
    currentPage:1,
    isFetching : false,
    followingInProgress:[],
}

const usersReducer=(state=initialState,action)=>{
    
    switch(action.type){
        
        case FOLLOW:
            return{
                ...state,
                users:updateObjectInArrayState(state.users,action.userId,'id',{followed:true})
                
            }
        case UNFOLLOW:
            return{
                
                ...state,
                users:updateObjectInArrayState(state.users,action.userId,'id',{followed:false})
                    
                    
                
            }
        case SET_USERS:
            return{
                ...state,
                users: action.users 
            }
            case SET_CURRENT_PAGE:
                return{
                    ...state,
                    currentPage: action.currentPage 
                }
        case SET_TOTAL_USERS_COUNT:
            return{
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FECHING:
            return{
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return{
                ...state,
                followingInProgress: action.isfollowingInProgress? [...state.followingInProgress,action.userId]
                :state.followingInProgress.filter(id=> id!= action.userId),
            }
        default:
            return state
       
        
     }        
    
   
}
export const FollowSucess=(userId)=>({type:FOLLOW, userId})
export const unFollowSucess=(userId)=>({type:UNFOLLOW,userId})
export const setUsers=(users)=>({type:SET_USERS,users})
export const setCurrentPage=(currentPage)=>({type:SET_CURRENT_PAGE,currentPage})
export const setTotalUsersCount=(totalUsersCount)=>({type:SET_TOTAL_USERS_COUNT,totalUsersCount})
export const toggleIsFeching=(isFetching)=>({type:TOGGLE_IS_FECHING,isFetching})
export const toggleFollowingProgress=(isfollowingInProgress,userId)=>(
    {type:TOGGLE_IS_FOLLOWING_PROGRESS,isfollowingInProgress,userId}
    )
export const getUsersThunkCreator =(currentPage,pageSize) =>async(dispatch)=>{
    dispatch(toggleIsFeching(true));
    let data = await usersAPI.getUsers(currentPage,pageSize)
    
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFeching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount));

}
const followUnfollowFlow=async(dispatch,userId,actionCreator,apiMethod)=>{

    dispatch(toggleFollowingProgress(true,userId))
    let data = await apiMethod(userId)

    if (data.resultCode===0){
        dispatch(actionCreator(userId))            
        
    }
    dispatch(toggleFollowingProgress(false,userId))
}


export const followTC=(userId)=>async (dispatch)=>{
    followUnfollowFlow(dispatch,userId,FollowSucess,usersAPI.getFollow.bind(this))
}

export const unfollowTC=(userId)=>async(dispatch)=>{
    followUnfollowFlow(dispatch,userId,unFollowSucess,usersAPI.getUnFollow.bind(this))
}

export default usersReducer;
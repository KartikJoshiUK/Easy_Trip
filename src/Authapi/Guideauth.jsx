import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import { auth2 } from "../Firebaseconfig";








export const Authapi = (email,password) => {
    try{
       return signInWithEmailAndPassword(auth2,email,password) 
    }catch(error) {
        return error;
        // ..
      }
    }
    export const  Regapi = (email,password) => {
    try{
      return   createUserWithEmailAndPassword(auth2,email,password)
      
    }catch(error){
      return error
    }
    
     
     
    }

    // export const Signout=()=>{
    //   try{
    //     return  signOut(authguide)
    //     }
    //     catch(error){
    //       return error
    //     }
    // }
    
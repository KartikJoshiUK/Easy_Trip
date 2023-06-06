import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";


import { auth1 } from "../Firebaseconfig";




export const Authapi = (email,password) => {
    try{
       return signInWithEmailAndPassword(auth1,email,password) 
    }catch(error) {
        return error;
        // ..
      }
    }
    export const  Regapi = (email,password) => {
    try{
      return   createUserWithEmailAndPassword(auth1,email,password)
    }catch(error){
      return error
    }
    
     
     
    }
    // export const Signout=()=>{
    //   try{
    //     return  signOut(auth)
    //     }
    //     catch(error){
    //       return error
    //     }
    // }
    

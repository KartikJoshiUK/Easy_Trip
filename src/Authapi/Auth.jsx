import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebaseconfig";

export const Authapi = (email, password) => {
  console.log(user);
  try {
    return signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error;
    // ..
  }
};
export const Regapi = (email, password) => {
  try {
    return createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error;
  }
};
export const Signout = () => {
  try {
    return signOut(auth);
  } catch (error) {
    return error;
  }
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyADwpNFXpmUEFHhcTkE5oqKE4SDJiNsY0Q",
  authDomain: "touristwebsite-bd9c3.firebaseapp.com",
  projectId: "touristwebsite-bd9c3",
  storageBucket: "touristwebsite-bd9c3.appspot.com",
  messagingSenderId: "828397628001",
  appId: "1:828397628001:web:f790bf83b1966c19fe9820"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};
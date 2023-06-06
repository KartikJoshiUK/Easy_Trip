// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig1 = {
  apiKey: "AIzaSyADwpNFXpmUEFHhcTkE5oqKE4SDJiNsY0Q",
  authDomain: "touristwebsite-bd9c3.firebaseapp.com",
  projectId: "touristwebsite-bd9c3",
  storageBucket: "touristwebsite-bd9c3.appspot.com",
  messagingSenderId: "828397628001",
  appId: "1:828397628001:web:f790bf83b1966c19fe9820"
};
const firebaseConfig2= {
  apiKey: "AIzaSyB6V-vam05MJhS9HCt662gcrPVzdRAZhkY",
  authDomain: "guideregistration.firebaseapp.com",
  projectId: "guideregistration",
  storageBucket: "guideregistration.appspot.com",
  messagingSenderId: "120087998008",
  appId: "1:120087998008:web:b0f573f90d97dcb4d480cd"
};
// Initialize Firebase
const app1 = initializeApp(firebaseConfig1,"app1");
const auth1 = getAuth(app1);
const app2=initializeApp(firebaseConfig2,"app2");
const auth2=getAuth(app2);
const db2=getFirestore(app2);
const store=getStorage(app2)
export {auth1,auth2,db2,store};
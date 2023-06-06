import { doc, setDoc } from "firebase/firestore/lite";

import uniqid from 'uniqid';
import { db2, store } from "../../Firebaseconfig";
import { ref } from "firebase/storage";

const detailfirestore = async() => {
    try {
        await setDoc(doc(db2, "cities", uniqid()), {
          name: "Los Angeles",
          state: "CA",
          country: "USA"
        });
        console.log("Document added successfully");
      } catch (error) {
        console.error("Error adding document:", error);
      }
}


export default {detailfirestore}
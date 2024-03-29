import { doc, getDoc, setDoc } from "firebase/firestore/lite";

import uniqid from 'uniqid';
import { db2, store } from "../../Firebaseconfig";
import { ref } from "firebase/storage";
let data  = []
export const detailfirestore = async(initialvalues) => {
    try {
        await setDoc(doc(db2, "users", uniqid()), {
          name:initialvalues.name,
          phone:initialvalues.phone,
          dob:initialvalues.dob,
          gender:initialvalues.gender,
           qualification:initialvalues.qualification,
          address:initialvalues.address,
          experience:initialvalues.experience,
          language:initialvalues.language,
          accountno:initialvalues.accountno,
          ifsccode:initialvalues.ifsccode, 
          state:initialvalues.state,
          city:initialvalues.city,
          aadhar:initialvalues.aadhar,
          pancard:initialvalues.pancard,
          approved:false  
        });
        console.log("Document added successfully");
      } catch (error) {
        console.error("Error adding document:", error);
      }
}

export const getAlldata = async ()=>{
  const doc = db2.collection('orders')
  doc.get().then((querySnapshot)=>{
    querySnapshot.docs.map((d)=>{
      console.log(d.data());
    })
  })

}

// export default {detailfirestore, getAlldata}
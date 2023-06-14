import { Button } from 'antd';
import {  useFormik } from 'formik';
import {useContext, useState} from 'react';
import Webcam from 'react-webcam';
import { ThemeContext } from '../GuideRestration';

import * as Yup from 'yup';
import { Link } from 'react-router-dom';

export default function VerificationForm(){
  const {aadhar,pancard} =useContext(ThemeContext)
  const formik=useFormik({
    initialValues:{
      aadhar,
      pancard
    },
    validationSchema:Yup.object({
      aadhar:Yup.string()
      .length(12,"Aadhar number must be exactly 12 digits")
      .required('Required'),
      pancard:Yup.string().required("PAN card number is required")
    })
  })
  
  console.log(formik.errors)
  const [Image,setImage]=useState(null)
  const videoConstraints = {
    width: 270,
    height: 200,
    facingMode: "user"
  };
  
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Verification Form</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4ad">
        <div>
          <label className="block font-bold mb-2" htmlFor="pancard">
            PAN Card Number
          </label>
          <input
            type="text"
            id="pancard"
            name="pancard"
            className="border border-gray-300 p-2 w-full"
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.pancard}
            required
          />
            {
               formik.touched.pancard && formik.errors.pancard?<div className="text-red-500">{formik.errors.pancard}</div>:null
              }
        </div>
        <div  className='ml-2'>
          <label className="block font-bold mb-2" htmlFor="aadharNumber">
            Aadhar Card Number
          </label>
          <input
            type="number"
            id="aadharNumber"
            name="aadhar"
            className="border border-gray-300 p-2 w-full"
             onChange={formik.handleChange} 
                value={formik.values.aadhar}
                onBlur={formik.handleBlur}
            required
          />
            {
               formik.touched.aadhar && formik.errors.aadhar?<div className="text-red-500">{formik.errors.aadhar}</div>:null
              }
        </div>
        <div className="mt-4">
        <label className="block font-bold mb-2" htmlFor="webcam">
           Photo Capture
        </label>
        <div className="p-2">
          <Webcam
            audio={false}
            name='web'
            screenshotFormat="image/png"
            className="w-ful"
            videoConstraints={videoConstraints}
          
          >
             {({ getScreenshot }) => (
        <button
        onClick={() => {
          const imageSrc = getScreenshot()
          setImage(imageSrc)
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Capture Image
      </button>
    )}
 </Webcam>
 <div>
        <div className='relative left-[300px] bottom-[260px] '>
        {
          Image && <img src={Image} alt="Capture Image"/>
        }
       </div>  
   
        </div>  

        </div>
     
    </div>
   

    </div>
    <div className="butto">
     <Link to="/" onClick={()=>{console.log("Sending to /")}}><Button default="primary" className='w-full' style={{ backgroundColor: '#096dd9' }} >Submit</Button></Link>
    </div>
    </div>
    
  );
}



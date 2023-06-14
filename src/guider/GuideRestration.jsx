import { useState } from 'react';
import {useFormik} from 'formik'
import * as Yup from "yup"
import { Stepper,Card,Group,Button } from '@mantine/core';
import { SignupGuide } from './guiderdetail/signup';
import RegistrationForm from './guiderdetail/2nd';
import VerificationForm from './guiderdetail/verificationdetail';
import { createContext} from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
export const ThemeContext = createContext()
  
const initialvalue={
 name:"",
 phone:"",
 dob:"",
 gender:"",
  qualification:"",
 address:"",
 experience:"",
 portfolio:"",language:"",
 accountno:"",
 ifsccode:"",
 state:"",
 city:"",
 aadhar:"",
 pancard:"",
}
export default function GuideRestration() {
  const formik= useFormik({
    initialValues:{
        email:"",
        password:"",
        confirmpassword:""
    },
    onSubmit:values=>{
        console.log(formik.values)
    },
   validationSchema:Yup.object({
    email:Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  
   }),
   validateOnMount: true
   })

const formik2=useFormik({ 
  initialValues : initialvalue,
  validationSchema:Yup.object({
    name:Yup.string().required("Required!"),
   
         phone:Yup.string()
         .min(10, 'Too Short!').max(10)
         .required('Required'),
         dob:Yup.string().required("Required!"),
         gender:Yup.string().required("Required!"),
        qualification:Yup.string().required("Required!"),
       address:Yup.string().required("Required!"),
      experience:Yup.string().required("Required!"),
      portfolio:Yup.string().required("Link Required!"),
      language:Yup.string().required("Required!"),
      accountno:Yup.string()
      .min(11, 'Too Short!').max(11)
      .required('Required'),
      ifsccode:Yup.string()
      .min(11, 'Too Short!').max(11)
      .required('Required!'),
      state:Yup.string().required("Required!"),
      city:Yup.string().required("Required!")
  
  })
  ,
  validateOnMount: true
})


const [active, setActive] = useState(0);
const nextStep=() => setActive((current) => (current < 3 ? current + 1 : current));
const prevStep=() => setActive((current) => (current > 0 ? current - 1 : current));


console.log(formik.errors)
  
  return (
    <ThemeContext.Provider value={{initialvalue, formik2,formik}}>
    <Card shadow="sm"  radius="md" withBorder style={{width:"700px",height:"50%",marginLeft:"20%",marginTop:"2%"}} >
     
     <Stepper active={active}  size="sm" onStepClick={setActive} breakpoint="sm" allowNextStepsSelect={true} iconSize={35}>
        <Stepper.Step label="First step"  description="Create an account">
         <SignupGuide />
        </Stepper.Step>
        <Stepper.Step label="Second step"  className='pb-6' description="User detail">
        <RegistrationForm/>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Verification">
      <VerificationForm/>
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button disabled={!formik.isValid && active===0 ||  !formik2.isValid && active===1} variant='default' onClick={nextStep} style={{backgroundColor:"#7CB9E8"}}>Next step</Button>
      </Group>
    </Card>
    <Link to="/"> <Typography.Link>You Are Already Signup? </Typography.Link></Link>
    </ThemeContext.Provider>
  );
}

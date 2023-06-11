import { useState } from 'react';

import { Stepper,Card,Group,Button } from '@mantine/core';
import { SignupGuide } from './guiderdetail/signup';
import RegistrationForm from './guiderdetail/2nd';
import VerificationForm from './guiderdetail/verificationdetail';
import { createContext} from 'react';
export const ThemeContext = createContext()
  
export default function GuideRestration() {
 let initialvalue={
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
  city:""

}
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <ThemeContext.Provider value={initialvalue}>
    <Card shadow="sm"  radius="md" withBorder style={{width:"700px",height:"50%",marginLeft:"20%",marginTop:"2%"}} >
     
     <Stepper active={active}  size="sm" onStepClick={setActive} breakpoint="sm" allowNextStepsSelect={false} iconSize={35}>
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
        <Button variant="defaut" onClick={prevStep}>Back</Button>
        <Button variant='default' onClick={nextStep} style={{backgroundColor:"#7CB9E8"}}>Next step</Button>
      </Group>
    </Card>
    </ThemeContext.Provider>
  );
}

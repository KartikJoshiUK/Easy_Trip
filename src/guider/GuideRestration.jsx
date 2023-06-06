import { useState } from 'react';

import { Stepper,Card,Group,Button } from '@mantine/core';
import { SignupGuide } from './guiderdetail/signup';
import RegistrationForm from './guiderdetail/2nd';
import VerificationForm from './guiderdetail/verificationdetail';


export default function GuideRestration() {
 
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <Card shadow="sm"  radius="md" withBorder style={{width:"700px",height:"50%",marginLeft:"20%",marginTop:"2%"}} >
     
     <Stepper active={active}  onStepClick={setActive} breakpoint="sm" allowNextStepsSelect={true} iconSize={35}>
        <Stepper.Step label="First step" description="Create an account">
         <SignupGuide />
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
        <RegistrationForm/>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
      <VerificationForm/>
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="defaut" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep} >Next step</Button>
      </Group>
    </Card>
  );
}

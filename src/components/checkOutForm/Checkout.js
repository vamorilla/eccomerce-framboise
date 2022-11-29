import { Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import React, { useState } from 'react';
import styles from './Checkout.module.css';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

const CheckOut = () => {
  const steps = ['Dirección de envío', 'Detalles del Pago'];
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
  const backStep = () => setActiveStep(prevActiveStep => prevActiveStep - 1);

  const Form = () => activeStep === 0 ? <AddressForm nextStep={nextStep} /> : <PaymentForm />;

  return (
    <>
    <main className={styles.container}>
      <Paper className={styles.paper}>
        <Typography component='h2' variant='h4' align='center'>
          Pago
        </Typography>
        <Stepper activeStep={activeStep} className={styles.stepper}>
          {steps.map(step => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>   
        <Form /> 
      </Paper>
    </main>
    </>
  )
}

export default CheckOut;

import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import AddressInput from './AddressInput';
import styles from './AddressForm.module.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

const AddressForm = ({nextStep}) => {
  
  const methods = useForm();
  const [{shippingData}, dispatch] = useStateValue();
  return (
    <>
      <Typography variant='h6' gutterBottom>Dirección de envío</Typography>
      <FormProvider {...methods}>
        <form onSubmit={ methods.handleSubmit(data => {
          dispatch({
            type: actionTypes.SET_SHIPPING_DATA,
            shippingData: data
          });
          nextStep();
        })}>
          <Grid container spacing={3}>
            <AddressInput required name='Nombre' />
            <AddressInput required name='Apellido' />
            <AddressInput required name='Dirección' />
            <AddressInput required name='Mail' />
            <AddressInput required name='Ciudad' />
            <AddressInput name='CodigoPostal' />
          </Grid>
          <div className={styles.btnContainer}>
            <Button LinkComponent={Link} to='/checkout-page' variant='contained' className={styles.btnPrev}>Anterior</Button>
            <Button type='submit' variant='contained' className={styles.btnNext}>Siguiente</Button>
          </div>
        </form> 
      </FormProvider>
    </>
  )
}

export default AddressForm
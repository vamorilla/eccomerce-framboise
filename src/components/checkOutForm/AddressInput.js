import { Grid, TextField } from '@mui/material';
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

const AddressInput = (props) => {

    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller control={control} name={props.name} render = {({field})=> (
                <TextField
                    fullWidth
                    label={props.name}
                    required
                    id={props.name}
                    {...field}
                />
                )}
            />
        </Grid>
    )
}

export default AddressInput;
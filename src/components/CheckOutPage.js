import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from './CheckOutPage.module.css';
import CheckOutCard from "./CheckOutCard";
import Total from "./Total";
import { useStateValue } from '../StateProvider';

const CheckOutPage = () => {
    const [{arrProd}, dispatch] = useStateValue();

    function FormRow(){
        return(
            <React.Fragment>
                {arrProd.map(item => {
                    return(
                        <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                            <CheckOutCard product={item} />
                        </Grid>
                    ) 
                })}
            </React.Fragment>
        );
    }

    return(
        <div className={styles.container}>
            <Grid container spacing={3}>
                <Grid item>
                    <Typography align="center" gutterBottom variant="h4">Carrito de compras</Typography>
                </Grid>
                <Grid item container spacing={2}>
                    <FormRow />
                </Grid>
                <Grid item>
                    <Typography align="center" gutterBottom variant="h4">
                        <Total />
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CheckOutPage;

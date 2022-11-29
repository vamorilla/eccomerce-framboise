import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import products from '../products-data';
import styles from './Products.module.css';

export default function Products() {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.containerProducts}>
      <Grid container spacing={3}>
        {
            products.map(prod => {
                return(
                    <Grid key={prod.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product key={prod.id} product={prod} />
                    </Grid>
                )
            })
        }
      </Grid>
    </Box>
  );
}

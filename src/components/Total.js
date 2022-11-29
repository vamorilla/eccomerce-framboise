import * as React from 'react';
import { Button } from '@mui/material';
import accounting from 'accounting';
import styles from './Total.module.css';
import { getTotalPrice } from '../reducer';
import { useStateValue } from '../StateProvider';
import { useNavigate} from 'react-router-dom';

const Total = () => {
    const [{arrProd}, dispatch] = useStateValue();
    const history = useNavigate();

    const checkOut = () => {
        return history('/checkout');
    }

    return (
        <div className={styles.container}>
            <h5>Total de productos: {arrProd.length}</h5>
            <h5>{accounting.formatMoney(getTotalPrice(arrProd), "$Arg ")}</h5>
            <Button className={styles.btn} onClick={checkOut}>Pagar</Button>
        </div>
    )
};

export default Total;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../images/logoFramboise.png';
import styles from './NavBar.module.css';
import { ShoppingCart } from '@mui/icons-material';
import { Badge, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import { actionTypes } from '../reducer';

export default function NavBar() {
  const [{arrProd, user}, dispatch] = useStateValue();
  const history = useNavigate();

  const handleAuth = () => {
    if(user){
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_ARR_PROD,
        arrProd: [],
      });

      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      
      history('/');
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed">
        <Toolbar className={styles.container}>
          <Link to='/'>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              <img src={logo} height="100px" />
            </IconButton>
          </Link>
          <div className={styles.btnContainer}>
            <Typography variant='h6' color='textPrimary' component='p'>
              {user ? user.email : " "}
            </Typography>
            <Link to='/signIn' className={styles.btnLink}>
              <Button className={styles.btn} variant="outlined" onClick={handleAuth}>{user ? "Salir" : "Ingresar"}</Button> 
            </Link>
            <Link to='/checkout-page'>
              <IconButton>
                  <Badge badgeContent={arrProd.length} color="secondary">
                      <ShoppingCart className={styles.cart} />
                  </Badge>
              </IconButton>
            </Link>  
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

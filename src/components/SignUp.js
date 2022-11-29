import React, { useState }  from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './SignUp.module.css';
import { Link as RouteLink, useNavigate} from 'react-router-dom';
import { auth } from '../firebase';

const theme = createTheme();

export default function SignUp() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };

    const signUpUser = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) =>{
            console.log(auth)
            if(auth){
              history('/');
            }
        }).catch(err=>alert('No se encontró usuario'));
      };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className={styles.container}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1}} className={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Dirección de email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className={styles.btn}
              onClick={signUpUser}
            >
              Crear
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouteLink to='/signIn' variant="body2" className={styles.signUp}>
                  Ya tienes una cuenta? Ingresar
                </RouteLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
import React, { useState }  from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './SignIn.module.css';
import { Link as RouteLink, useNavigate} from 'react-router-dom';
import { auth } from '../firebase';

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const signInUser = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((auth) => history('/')).catch(err=>alert('Error al ingresar'));
  }

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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              value={email}
              onChange={e=>setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Dirección de mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={password}
              onChange={e=>setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className={styles.btn}
              onClick={signInUser}
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" className={styles.signUp}>
                  Olvidó su contraseña?
                </Link>
              </Grid>
              <Grid item>
                <RouteLink to='/SignUp' variant="body2" className={styles.signUp}>
                  {"Aún no posee una cuenta? Crear"}
                </RouteLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
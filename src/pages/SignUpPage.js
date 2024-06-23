//로그인페이지import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { fetchUserSingup } from '../api/FectUser';
import BaseComponent from '../components/BaseComponents';
import Logo from '../assets/mainLogo.png'
import styled from 'styled-components';


const WrapperContainer = styled.div`
    height:100vh; 
    display:flex;
    flexDirection:column;
    justifyContent:center
`


export default function SignUpPage() {
  const [userLogin, setUserLogin] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUserSingup(userLogin.name, userLogin.email, userLogin.password)
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        alert(error.response.data.message);
      });

  };

  return (
    <BaseComponent>
      <div style={{width:'100%'}}>
      <WrapperContainer>
        <Container component="main" maxWidth="xs" >
          
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={Logo} width={'50px'}/>
            <Typography component="h1" variant="h5" style={{fontWeight:'bold'}}>
              회원가입
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="name"
                    name="name"
                    onChange={handleInputChange}
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    onChange={handleInputChange}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={handleInputChange}
                    autoComplete="new-password"
                  />
                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,background:"#439F86"}}
              >
                Sign Up
              </Button>
                <div style={{textAlign:'center'}}>
                  <Link href="/login" variant="body2">
                    로그인
                  </Link>
                </div>
            </Box>
          </Box>
        </Container>
      </WrapperContainer>
      </div>
    </BaseComponent>
  );
}
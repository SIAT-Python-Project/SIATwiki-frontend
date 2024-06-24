import * as React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import BaseComponent from '../components/BaseComponents';
import Logo from '../assets/mainLogo.png'
import styled from 'styled-components';



const WrapperContainer = styled.div`
    height:100vh; 
    display:flex;
    flexDirection:column;
    justifyContent:center
`
// TODO remove, this demo shouldn't need to reset the theme.

export default function SingInPage({ data }) {
  const [userLogin, setUserLogin] = React.useState({ email: "", password: "", id: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userLogin.email);
    try {
      const response = await axios.post('/api/login', userLogin);
      navigate('/');

    } catch (error) {
      alert(error.response.data.message);
    }
  };


  return (
    <BaseComponent>
    <div style={{width:'100%'}}>
    <WrapperContainer>
      <Container component="main" maxWidth="xs">
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
              로그인
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              value={userLogin.email}
              onChange={handleInputChange}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={userLogin.password}
              onChange={handleInputChange}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background:"#439F86"}}
            >
              Sign In
            </Button>
              <div style={{textAlign:'center'}}>
                <Link href="/sign-up" variant="body2" >
                  {"계정이 없으신가요?"}
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
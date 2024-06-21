import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import { fetchPersonNames } from '../api/FetchPerson';
import Autocomplete from '@mui/joy/Autocomplete';
import { Button, TextField } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

const InputWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  color:'black',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const CustomBUtton = styled(Button)(({ theme })=>({
  color:"white",
  width:"100px"

}));

export default function SearchAppBar() {
  
  const [value,setValue]= React.useState(""); //검색어
  const [personList,setPersonList] = React.useState([]);
  
  React.useEffect(()=>{
    fetchPersonNames().then(data=>setPersonList(data));
    console.log(personList.map(data=>data.id))
  }
,[])

  const navigate = useNavigate();

//name으로 id를 찾는 함수 
  function getIdByName(name) {
    const person = personList.find(person => person.name === name);
    return person ? person.id : null;
  }

  const handleSubmit = () => {
    //새고로침 방지
    const personId = getIdByName(value);
    navigate(`/api/person/${personId}`);
    
  };


  return (
    <Box sx={{ flexGrow: 1, width: '100vw' }}>
      <AppBar position="static" sx={{ bgcolor: 'green',padding:'0 10px' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, width: '70%' }}
          >
            씨앗위키
          </Typography>
          <InputWrapper>
            <Autocomplete
              id="search-auto-complete"
              autoComplete
              options={personList.map((data) => data.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="누구를 검색해볼까요?"
                  variant="outlined"
                  value={value}
                  onChange={(event, newValue) => setValue(newValue)}
                />
              )}
            />
          </InputWrapper>
          <CustomBUtton type="submit" variant="contained" color="primary" onClick={handleSubmit}>검색</CustomBUtton>
          <CustomBUtton variant="contained" color="neutral" >LOGIN</CustomBUtton>
          <CustomBUtton variant="contained" color="neutral" >SIGN IN</CustomBUtton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

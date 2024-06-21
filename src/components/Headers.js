import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { fetchPersonNames } from '../api/FetchPerson';
import { Button, Input } from '@mui/joy';
import { useAutocomplete } from '@mui/base/useAutocomplete';

const InputWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  color: 'black',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const Listbox = styled('ul')(({ theme }) => ({
  width: 200,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  overflow: 'auto',
  maxHeight: 200,
  border: '1px solid rgba(0,0,0,.25)',
  '& li.Mui-focused': {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  color: 'white',
  width: '100px',
}));

export default function SearchAppBar() {
  const [personList, setPersonList] = React.useState([]);
  const [value, setValue] = React.useState(''); // 검색어 상태 추가
  React.useEffect(() => {
    fetchPersonNames().then((data) => setPersonList(data));
  }, []);

  const {
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    setInputValue,
  } = useAutocomplete({
    freeSolo: true,
    autoHighlight: true,
    autoComplete: true,
    id: 'search-name-autocomplete',
    options: personList,
    getOptionLabel: (option) => option.name,
    onChange: (event, newValue) => {
      setValue(newValue ? newValue.name : '');
      console.log(newValue)
    },
  });

  // name으로 id를 찾는 함수
  function getIdByName(name) {
    const person = personList.find((person) => person.name === name);
    return person ? person.id : null;
  }

  const submitHandler = (event) => {
    event.preventDefault(); // 새로고침 방지
    const personId = getIdByName(value);
    if (personId) {
      document.location.href = `/person/${personId}`;
    }
  };

  return (
    <Box sx={{ flexGrow: 1, width: '100vw' }}>
      <AppBar position="static" sx={{ bgcolor: 'green', padding: '0 10px' }}>
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
            <Input
              {...getInputProps({
                onChange: (e) => setInputValue(e.target.value),
              })}
              sx={{ '--Input-focusedThickness': '0' }}
              placeholder="누구를 검색해볼까요?"
            />
            {groupedOptions.length > 0 ? (
              <Listbox {...getListboxProps()}>
                {groupedOptions.slice(0, 5).map((option, index) => (
                  <li {...getOptionProps({ option, index })} key={option.name} style={{ padding: '5px' }}>
                    {option.name}
                  </li>
                ))}
              </Listbox>
            ) : null}
          </InputWrapper>
          <CustomButton type="submit" variant="contained" color="primary" onClick={submitHandler}>
            검색
          </CustomButton>
          <CustomButton variant="contained" color="neutral">
            LOGIN
          </CustomButton>
          <CustomButton variant="contained" color="neutral">
            SIGN IN
          </CustomButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

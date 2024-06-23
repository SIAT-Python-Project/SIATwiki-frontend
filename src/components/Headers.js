import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { fetchPersonNames } from '../api/FetchPerson';
import { Button, Input } from '@mui/joy';
import { useAutocomplete } from '@mui/base/useAutocomplete';
import mainLogo  from '../assets/mainLogo.png';
import { fetchLogout, fetchUserList } from '../api/FectUser';
import textLogo from '../assets/textLogo.png'

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
  const [userCookie, setUserCookie] = React.useState(null);


  React.useEffect(() => {
    fetchPersonNames()
      .then((data) => setPersonList(data))
      .catch(error => alert(error.response.data.message));
  }, []);

  React.useEffect(() => {
    // 쿠키에서 사용자 정보 가져오기
    const userEmail = getCookie('email');
    const userName = getCookie('name');
    const userId = getCookie('id');

    // 쿠키 상태 업데이트
    if (userEmail && userName && userId) {
      setUserCookie({ email: userEmail, name: decodeURIComponent(userName), id: userId });
    } else {
      setUserCookie(null);
    }
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
    else {
      alert('해당 인물이 존재하지 않습니다!');
    }
  };


  const logoutHandleSubmit = (event) => {
    event.preventDefault();
    fetchLogout().then(() => {

      setUserCookie(null);
      // 쿠키 삭제
      deleteCookie('email');
      deleteCookie('name');
      deleteCookie('id');
      document.location.href = '/';
    });
  };

  // 쿠키 삭제 함수
  const deleteCookie = (name) => {
    document.cookie = `${name}=; Max-Age=-1; path=/`;
  };
  // 쿠키 가져오는 함수
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };



  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar position="static" sx={{ bgcolor: '#439F86', padding: '0 10px' }}>
        <Toolbar>
          <Button padding={"0 3vw"} onClick={() => { document.location.href = "/" }} color='transparent'>
            <img src={mainLogo} width={"50px"} />
          </Button>
          < Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, width: '70%' }}
          >
            <Button onClick={()=>{document.location.href='/'}} style={{background:'transparent'}}>
              <img src={textLogo} style={{width:'120px',marginTop:'10px'}}/>
            </Button>
            
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

          {userCookie ? (
            <>
              <div style={{minWidth:"50px", textAlign:"center"}}>
                {userCookie.name}
              </div>
              <CustomButton variant="contained" color="neutral" onClick={logoutHandleSubmit}>
                LOGOUT
              </CustomButton>
            </>
          ) : (
            <>
              <CustomButton variant="contained" color="neutral" onClick={() => { document.location.href = "/login" }}>
                LOGIN
              </CustomButton>
              <CustomButton variant="contained" color="neutral" onClick={() => { document.location.href = "/sign-up" }}>
                SIGN IN
              </CustomButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

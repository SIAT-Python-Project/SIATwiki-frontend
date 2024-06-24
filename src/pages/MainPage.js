import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Container } from '@mui/material';
import BaseComponent from '../components/BaseComponents';
import MainImg from '../assets/main.png';
const WrapperContainer = styled.div`
    height:100vh; 
    display:flex;
    flexDirection:column;
    justifyContent:center
`
const Title = styled.div`
    padding: 30px 0;
    font-weight:bold;
    color:#439F86
`

function MainPage() {

  const [data, setData] = useState({});
  const params = useParams();
  const id = params.id;

  //최초 실행시 데이터 받아오기

  return (
    <BaseComponent>
    <div style={{width:'100%'}}>
    <WrapperContainer>
      <Container component="main" maxWidth="xs" style={{textAlign:'center', fontSize:'1rem'}}>
        
        <Title>씨앗 위키에 오신 것을 환영합니다!</Title>
        <img src={MainImg} style={{width:'200px'}}></img>
        <Box padding={'10px 0'}></Box>
        <Title>기획 의도</Title>

        파이널 프로젝트를 <br></br>약 2주간 남긴 상황에서
        <Box padding={'10px 0'}></Box>
        아직 서로는 서로가 <br></br> 일하는 스타일이 어떤지,
        <Box padding={'10px 0'}></Box>
        어떤 기술 스택에 관심있어 하는지
        <br></br>
        알 기회가 없었습니다...🤔
        <br></br>
        .
        <br></br>
        .
        <br></br>
        <Box padding={'30px 0'}></Box>
        그래서 생각해봤는데요,
        <br></br>
        내 정보를 알기 쉽게 문서화해보면 어떨까요?


        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background:"#439F86"}}
              onClick={()=>{document.location.href='/person/creation'}}
            >
                
            이참에 적어봐요!
        </Button>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background:"#439F86"}}
            >
                
            기존 정보 검색은 상단에!
        </Button>
      </Container>
    </WrapperContainer>
    </div>
  </BaseComponent>
  );
}

export default MainPage;

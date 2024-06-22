import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Headers from '../components/Headers';
import CreateInfoTable from '../components/CreateInfoTable';



const MainPageWrapper = styled.div`
  width: 100%;
  background: #cecece;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'bmdohyeon';
  font-size: 2.5vmin;
  overflow-x:auto;
  height:100vh;
  @media screen and (max-width: 768px) {
    font-size: 4vmin;
  }
  
`;

const MainInfoContainer = styled.div`
    background:white;
    padding:10px;
    border-radius:10px;

`;


const Container = styled.div`
  background: blue;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-top:30px;
  width:80%;
  justify-content:center;
  @media screen and (max-width: 768px) {
    flex-direction:column;
  }
`;

const TimeStampContainer = styled.div`
  font-size:13px;
  padding: 20px 0px;
  color:grey;
`;

const TableWrapper = styled.div`
  background: white ;
  padding: 10px;
  margin: 0 300px;

`;



function MainPage() {
//부모에서 객체수정 함수를 받아와야함~
  const [data, setData] = useState({});

  return (
    <div>
      
      <MainPageWrapper>
      <Headers />
        <Container>
        
        <MainInfoContainer>
            <TableWrapper>
            <h3> 새로운 인물을 등록하고 싶나요?</h3>
                <CreateInfoTable></CreateInfoTable>
            </TableWrapper>
        </MainInfoContainer>
        </Container>
      </MainPageWrapper>
    </div>
  );
}

export default MainPage;

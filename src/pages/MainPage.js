import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Headers from '../components/Headers';
import Overview from '../components/Overview';
import Description from '../components/Description';
import InfoTable from '../components/InfoTable';
import { fetchPersonProfile } from '../api/FetchPerson';
import { useParams } from 'react-router-dom';



const MainPageWrapper = styled.div`
  width: 100%;
  background: #cecece;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'bmdohyeon';
  font-size: 2.5vmin;
  overflow-x:auto;
  @media screen and (max-width: 768px) {
    font-size: 4vmin;
  }
  
`;

const InfoContainer = styled.div`
  background: white ;
  padding: 10px;
  margin: 0 auto;
  width: 100%;
//   스크롤 바 안보이게!
  &::-webkit-scrollbar {
    display: none;
  }

`;

const Container = styled.div`
  position: relative;
  background: blue;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  width:60vw;
  margin-top:30px;
  @media screen and (max-width: 768px) {
    flex-direction:column;
  }
`;

const TimeStampContainer = styled.div`
  font-size:13px;
  padding: 20px 0px;
  color:grey;
`;

const TableAndOverView = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    @media screen and (max-width: 768px) {
    flex-direction:column;
  }
`



function MainPage() {

  const [data, setData] = useState({});

  const params = useParams();
  const id = params.id;

  //최초 실행시 데이터 받아오기

  return (
    <div>
      <Headers />
      <MainPageWrapper>
        <Container>

          <h1>
            안녕하세요ㅋㅋ ㅎㅎ
          </h1>
        </Container>
      </MainPageWrapper>
    </div>
  );
}

export default MainPage;

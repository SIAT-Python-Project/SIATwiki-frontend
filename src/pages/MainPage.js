import React from 'react';
import styled from 'styled-components';
import Headers from '../components/Headers';
import Overview from '../components/Overview';
import Description from '../components/Description';
import { Info } from '@mui/icons-material';
import InfoTable from '../components/InfoTable';

const MainPageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #cecece;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'bmdohyeon';
  font-size: 2.5vmin;

  @media screen and (max-width: 500px) {
    font-size: 4vmin;
  }
`;

const InfoContainer = styled.div`
  background: white ;
  padding: 10px;
  margin: 0 20px;
  width:100%
`;

const Container = styled.div`
  position: relative;
  background: white;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  width:60vw;
  height:100vh;
  margin-top:30px;
`;

const CommentContainer = styled.div`
  background: orange;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

const TableAndOverView = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`
function MainPage() {
  return (
    <div>
      <Headers />
      <MainPageWrapper>
        <Container>

            <InfoContainer>
                <h1>이름</h1>
                {/* <p>최근 수정 시각:</p> */}
                <TableAndOverView>
                    <Overview />
                    <InfoTable/>
                </TableAndOverView>


                <Description />
            </InfoContainer>
                {/* <CommentContainer>
                댓글 컴포넌트 넣으면 됨
                </CommentContainer> */}
        </Container>
      </MainPageWrapper>
    </div>
  );
}

export default MainPage;

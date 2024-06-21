import React from 'react';
import styled from 'styled-components';
import Headers from '../components/Headers';
import Overview from '../components/Overview';
import Description from '../components/Description';
import InfoTable from '../components/InfoTable';



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

const CommentContainer = styled.div`
  background: orange;
  padding: 10px;
  display: flex;
  flex-direction: row;
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
function PersonPage() {
  return (
    <div>
      <Headers />
      <MainPageWrapper>
        <Container>

            <InfoContainer>
                <h1>이름</h1>
                <TimeStampContainer>
                    최근 수정 시각 : 2024-00:00:00:00
                    {/* <p>최근 수정 시각:</p> */}
                </TimeStampContainer>
                
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

export default PersonPage;

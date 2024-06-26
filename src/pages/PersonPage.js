import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Overview from '../components/Overview';
import Description from '../components/Description';
import InfoTable from '../components/InfoTable';
import { fetchPersonProfile } from '../api/FetchPerson';
import { useParams } from 'react-router-dom';
import BaseComponent from '../components/BaseComponents';

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

const TimeStampContainer = styled.div`
  font-size:13px;
  padding: 20px 0px;
  color:grey;
`;

const TableAndOverView = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    @media screen and (max-width: 968px) {
    flex-direction:column;
    margin: auto auto;
    width:300px
  }
`



function PersonPage() {

  const [data, setData] = useState({});


  const params = useParams();
  const id = params.id;

  //최초 실행시 데이터 받아오기
  useEffect(() => {
    fetchPersonProfile(id)
      .then(data => setData(data))
      .catch(error => {
        document.location.href = '/';
        alert(error.response.data.message);
      });
  }
    , []);

  return (
    <BaseComponent>

          <InfoContainer>
            <h1>{data.name}</h1>
            <TimeStampContainer>
              {/* 최근 수정 시각 : 2024-00:00:00:00
                    TODO: 회의 때 PersonResponseDTO에 updatedDate 필드 추가 예고 */}
              {/* <p>최근 수정 시각:</p> */}
            </TimeStampContainer>

            <TableAndOverView>
              <Overview />
              <InfoTable data={data} />
            </TableAndOverView>
            <Description personId={id} />
          </InfoContainer>
    </BaseComponent>

  );
}

export default PersonPage;

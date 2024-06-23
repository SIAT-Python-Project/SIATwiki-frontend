import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import BaseComponent from '../components/BaseComponents';


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
   <BaseComponent>
        제가 보이세요?
    </BaseComponent>
  );
}

export default MainPage;

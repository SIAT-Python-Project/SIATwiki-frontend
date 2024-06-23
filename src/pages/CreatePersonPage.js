import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CreateInfoTable from '../components/CreateInfoTable';
import BaseComponent from '../components/BaseComponents';



const MainInfoContainer = styled.div`
    background:white;
    padding:10px;
    border-radius:10px;

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



function CreatePersonPage() {
//부모에서 객체수정 함수를 받아와야함~
  const [data, setData] = useState({});

  return (
    <BaseComponent>
        <MainInfoContainer>
            <TableWrapper>
            <h3> 새로운 인물을 등록하고 싶나요?</h3>
                <CreateInfoTable></CreateInfoTable>
            </TableWrapper>
        </MainInfoContainer>
    </BaseComponent>
       
  );
}

export default CreatePersonPage;

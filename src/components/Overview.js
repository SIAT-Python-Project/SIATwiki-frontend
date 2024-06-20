import React from 'react';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: white;
  border: solid;
  border-color: #cecece;
  padding: 10px;
  border-radius:10px;
  display: flex;
  flex-direction: column;
  height:100%;
  margin: 0 0px;
  padding:30px;
`;

const Overview = () => {
  return (
    <Wrapper>
      <Typography variant="h5" component="h2">
        목차<br/>
      </Typography>
      <Typography component="p">
        <ul>
          <li>
            기술 스펙
          </li>
          <li>
            프로젝트 성향
          </li>
          <li>
            좋아하는 팀원
          </li>
          <li>
            논란
          </li>
          <li>
            여담
          </li>
        </ul>
      </Typography>
    </Wrapper>
  );
}

export default Overview;

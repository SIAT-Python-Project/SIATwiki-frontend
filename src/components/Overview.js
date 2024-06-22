import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { fetchCategoryNames } from '../api/FetchCategory';

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
  
  const [names,setNames] = useState([]);

  useEffect(() => {
    fetchCategoryNames()
    .then(data => setNames(data))
    .then(names.sort((a,b)=>a.order - b.order)); //order 순으로 정렬
  }
    , [names]);

  return (
    <Wrapper>
      <Typography variant="h5" component="h2">
        목차<br/>
      </Typography>
      <Typography component="p">
      <ul style={{'list-style-type':"none"}}>
        {names && names.map((name) => (
          <li key={name.order}>{name.order+1}.{name.krName}</li>
        ))}
      </ul>
      </Typography>
    </Wrapper>
  );
}

export default Overview;

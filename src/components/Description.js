import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { fetchPersonInfo } from '../api/FetchInfo';
import Info from './Info';

const Description = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    const data = fetchPersonInfo(1);
    data.then(result => setInfos(result))
  }, []);
  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h5" component="h2">
        설명
      </Typography>
      <Typography component="p">
        <ul>
          {infos && infos.map((info, idx) => {
            return <Info key={idx} data={info}></Info>
          })}
        </ul>
        여기에 설명 내용을 작성하세요. 이 부분은 문서의 자세한 정보를 포함합니다.
      </Typography>
    </Paper>
  );
}

export default Description;

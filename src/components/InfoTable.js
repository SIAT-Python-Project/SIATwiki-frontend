import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/system';

const GreenTableCell = styled(TableCell)({
  backgroundColor: 'green',
  color: 'white',
  textAlign:'center',
  color:'black'
});

const Wrapper = styled('div')({
  });
  

const InfoTable = (data) => {
  //data: {data(객체)}로 받아와져서, 한 번 풀어줘야함 ..ㅠ ..
  const profile= data.data;
  //profile.github.split('/')[3]로 받아올 때 자꾸 제대로 받아오지 못하는 오류가 있어서 텍스트로 대체합니다
  const githubId = "깃허브 링크";
  
  return (

    /*
    반복문으로 아래 부분을 반복할 것을 추천합니다..
    <TableRow>
        <GreenTableCell>Green Cell</GreenTableCell>
        <TableCell>Cell 2</TableCell>
    </TableRow>
    */
   <Wrapper>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <GreenTableCell colSpan={2}>{profile.name}</GreenTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {/* 이미지 셀 */}
          <TableRow>
            <TableCell colSpan={2} align="center">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Yukidaruma.jpg/200px-Yukidaruma.jpg'></img>
            </TableCell>
          </TableRow>
          
          <TableRow>
            <GreenTableCell>MBTI</GreenTableCell>
            <TableCell>{profile.mbti}</TableCell>
          </TableRow>
          <TableRow>
            <GreenTableCell>email</GreenTableCell>
            <TableCell>{profile.email}</TableCell>
          </TableRow>
          <TableRow>
            <GreenTableCell>GitHub</GreenTableCell>
            <TableCell><a href={profile.github}>{githubId}</a></TableCell>
          </TableRow>
         

        </TableBody>
      </Table>
    </TableContainer>
    </Wrapper>
  );
};

export default InfoTable;

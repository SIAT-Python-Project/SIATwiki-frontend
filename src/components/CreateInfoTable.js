import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/system';
import defaultImage from '../assets/default.jpg';
import { TextField } from '@mui/joy';

const GreenTableCell = styled(TableCell)({
  backgroundColor: 'green',
  color: 'white',
  textAlign: 'center',
  color: 'black'
});


const ImgWrapper = styled('div')({
  width: "300px",
  hegiht: "300px",
  objectFit: 'cover'
})

const Wrapper = styled('div')({
});


const CreateInfoTable = () => {

  const [name, setName] = useState('');
  const [mbti, setMbti] = useState('');
  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');

  const handleSubmit = async () => {
    const profileData = {
      name,
      mbti,
      email,
      github,
      filePath: defaultImage // 기본 이미지 사용
    };
  }

  return (

    <Wrapper>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <GreenTableCell colSpan={2}>이름!</GreenTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* 이미지 셀 */}
          <TableRow>
            <TableCell colSpan={2} align="center">
              <div>
                <img width="300px" src={defaultImage} alt="default" />
                {/* <img width="300px" src={`http://localhost:8080/profile/${profile.filePath}`} alt="profile" /> */}
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <GreenTableCell>이름</GreenTableCell>
            <TableCell>
              {/* <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              /> */}
            </TableCell>
          </TableRow>
          <TableRow>
            <GreenTableCell>MBTI</GreenTableCell>
            <TableCell>
              {/* <TextField
                value={mbti}
                onChange={(e) => setMbti(e.target.value)}
                fullWidth
              /> */}
            </TableCell>
          </TableRow>
          <TableRow>
            <GreenTableCell>email</GreenTableCell>
            <TableCell>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <GreenTableCell>GitHub</GreenTableCell>
            <TableCell>
              <TextField
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                fullWidth
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} align="center">
              <button variant="contained" color="primary" onClick={handleSubmit}>
                제출
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Wrapper>
  );
};

export default CreateInfoTable;

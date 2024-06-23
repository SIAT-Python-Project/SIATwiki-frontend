import React, { useRef, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/system';
import defaultImage from '../assets/default.jpg';
import { Input } from '@mui/joy';
import { createPersonProfile } from '../api/FetchPerson';
const GreenTableCell = styled(TableCell)({
  backgroundColor: '#439F86',
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

const ProfileSettingWrapper = styled('div')({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "cetner"
})

const CreateInfoTable = (profileInfo, setProfileInfo) => {
  //TODO
  //리팩토링: 부모로부터 객체 단위로 수정하는 함수를 받아와 필드 수정예정
  const [name, setName] = useState('');
  const [mbti, setMbti] = useState('');
  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');
  const [profileImg, setProfileImg] = useState("");

  const imgRef = useRef();

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileImg(reader.result);
    };

  };
  const handleSubmit = async () => {

    const profileData = {
      "name": name,
      "mbti": mbti,
      "email": email,
      "github": github,
    };

    const userId = createPersonProfile(profileData, imgRef.current.files[0])
      .then(data => document.location.href = `/person/${data.id}`)
      .catch(error => alert(error.response.data.message));
  }

  return (

    <Wrapper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <GreenTableCell colSpan={2}>추가할 인물 정보를 입력하세요</GreenTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* 이미지 셀 */}
            <TableRow>
              <TableCell colSpan={2} align="center">
                <ProfileSettingWrapper>
                  <div>
                    <img width="300px" src={profileImg ? profileImg : defaultImage}
                      alt="프로필 이미지" />
                  </div>
                  <div>
                    <input
                      id="file-upload-input"
                      type="file"
                      name="file"
                      multiple
                      onChange={saveImgFile}
                      ref={imgRef}
                    />
                  </div>
                </ProfileSettingWrapper>
                {/* <img width="300px" src={`http://localhost:8080/profile/${profile.filePath}`} alt="profile" /> */}
              </TableCell>
            </TableRow>
            <TableRow>
              <GreenTableCell>이름</GreenTableCell>
              <TableCell>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <GreenTableCell>MBTI</GreenTableCell>
              <TableCell>
                <Input
                  value={mbti}
                  onChange={(e) => setMbti(e.target.value)}
                  fullWidth
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <GreenTableCell>email</GreenTableCell>
              <TableCell>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <GreenTableCell>GitHub</GreenTableCell>
              <TableCell>
                <Input
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

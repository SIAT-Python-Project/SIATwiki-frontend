import React from "react";
import styled from "styled-components";
import Headers from '../components/Headers';

const MainPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
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

const Container = styled.div`
  position: relative;
  border: solid 2px;
  border-color: #b5b5b5;
  padding: 10px;
  border-radius:10px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  width:60vw;
  margin:30px auto;
  @media screen and (max-width: 768px) {
    flex-direction:column;
  }
`;

export default function BaseComponent({ children }) {
  return (
    <MainPageWrapper>
      <Headers />
      <Container>
        {children}
      </Container>
    </MainPageWrapper>
  );
}

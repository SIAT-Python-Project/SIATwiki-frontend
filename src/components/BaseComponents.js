import React from "react";
import styled from "styled-components";
import Headers from '../components/Headers';

const MainPageWrapper = styled.div`
  width: 100%;
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
  background: blue;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  width:60vw;
  margin-top:30px;
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

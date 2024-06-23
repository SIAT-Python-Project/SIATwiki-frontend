import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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

export default function MainPageWrapper(){
return(
    <Wrapper>

    </Wrapper>
)
}
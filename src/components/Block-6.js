import React from "react";
import styled, { keyframes } from "styled-components";

const appear1 = keyframes`
  0%,
  24% {
    opacity: 0;
  }

  25%,
  100% {
    opacity: 1;
  }
`;

const appear2 = keyframes`
  0%,
  49% {
    opacity: 0;
  }

  50%,
  100% {
    opacity: 1;
  }
`;

const appear3 = keyframes`
  0%,
  74% {
    opacity: 0;
  }

  75%,
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  background-color: #1b1b1b;
  position: relative;
  overflow: hidden;

  & > span {
    font-family: "Pacifico", cursive;
    font-size: 10rem;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    white-space: nowrap;
  }
`;

const Text1 = styled.span`
  transform: translate(-50%, -50%);
  color: #f2dba4;
`;
const Text2 = styled.span`
  transform: translate(-40%, -60%);
  color: rgba(242, 219, 164, 0.6);
  animation: ${appear1} 4s linear infinite;
`;
const Text3 = styled.span`
  transform: translate(-30%, -70%);
  color: rgba(242, 219, 164, 0.4);
  animation: ${appear2} 4s linear infinite;
`;
const Text4 = styled.span`
  transform: translate(-20%, -80%);
  color: rgba(242, 219, 164, 0.2);
  animation: ${appear3} 4s linear infinite;
`;

function BlockSix() {
  return (
    <Wrapper>
      <Text1>Bel Air</Text1>
      <Text2>Bel Air</Text2>
      <Text3>Bel Air</Text3>
      <Text4>Bel Air</Text4>
    </Wrapper>
  );
}

export default BlockSix;

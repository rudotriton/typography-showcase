import React from "react";
import styled, { keyframes } from "styled-components";

const slideIn = (idx) => keyframes`
  0%,
  ${idx * 10}% {
    transform: translate3d(-100%, 0, 0);
  }

  ${idx * 10 + 10}%,
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const Appear = keyframes`
  0%,
  60%,
  95%,
  100% {
    opacity: 0;
  }

  61%,
  85% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  background-color: #fff;
  position: relative;
`;

const Text = styled.span`
  font-family: "Inter", sans-serif;
  color: #fff;
  font-weight: 800;
  font-size: 6rem;
  letter-spacing: -0.3rem;
  text-align: center;
  position: absolute;
  text-transform: uppercase;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${Appear} 6s linear infinite;
`;

const Block = styled.div`
  height: 20%;
  background-color: #000;
  width: 100%;
  animation: ${(p) => slideIn(p.idx)} 6s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const BlockFifteen = () => {
  const generateBlocks = () => {
    const blocks = [];
    for (let i = 0; i <= 4; i += 1) {
      blocks.push(<Block key={i} idx={i} />);
    }
    return blocks;
  };

  return (
    <Wrapper>
      {generateBlocks()}
      <Text>Closing Time</Text>
    </Wrapper>
  );
};

export default BlockFifteen;

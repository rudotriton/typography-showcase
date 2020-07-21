import React from 'react';
import styled, { keyframes } from 'styled-components';

const Extend1 = keyframes`
  0% {
    width: 0%;
  }

  10%,
  100% {
    width: 100%;
  }
`;

const Extend2 = keyframes`
  0%,
  10% {
    width: 0%;
  }

  20%,
  100% {
    width: 100%;
  }
`;

const Extend3 = keyframes`
  0%,
  20% {
    width: 0%;
  }

  30%,
  100% {
    width: 100%;
  }
`;

const Extend4 = keyframes`
  0%,
  30% {
    width: 0%;
  }

  40%,
  100% {
    width: 100%;
  }
`;

const Extend5 = keyframes`
  0%,
  40% {
    width: 0%;
  }

  50%,
  100% {
    width: 100%;
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
  background-color: white;
  position: relative;
`;

const Text = styled.span`
  font-family: 'Inter', sans-serif;
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
  animation: ${(p) => p.anim} 6s linear infinite;
`;

const BlockFifteen = () => {
  const generateBlocks = () => {
    const blocks = [];
    const animations = [Extend1, Extend2, Extend3, Extend4, Extend5];
    for (let i = 0; i <= 4; i += 1) {
      blocks.push(<Block key={i} anim={animations[i]} />);
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

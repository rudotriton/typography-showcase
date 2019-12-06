import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import BlinkingStar from './BlinkingStar';

const Appear = keyframes`
  0%,
  20% {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  }

  60% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  81% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  background-color: #000d53;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-family: 'Passion One', sans-serif;
  font-size: 10rem;
  text-transform: uppercase;
  color: #0122d6;

  &::after {
    content: "You're a star";
    font-size: 6rem;
    color: #fff;
    font-family: 'Pacifico', sans-serif;
    width: fit-content;
    position: absolute;
    text-transform: capitalize;
    letter-spacing: 0;
    left: 50%;
    padding: 2rem;
    transform: translateX(-50%) rotate(-10deg);
    animation: ${Appear} 7s ease-in-out infinite;
  }
`;

const BlockSeventeen = () => {
  const [x] = useState(85);
  const [y] = useState(40);
  return (
    <Wrapper>
      <Text>Andy</Text>
      <BlinkingStar x={x} y={y} />
    </Wrapper>
  );
};

export default BlockSeventeen;

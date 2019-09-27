import React from 'react';
import styled, { keyframes } from 'styled-components';

const red = keyframes`
  0%,
  7%,
  19%,
  40%,
  61%,
  78%,
  88%,
  100% {
    transform: translate(-50%, -50%);
  }

  5%,
  15%,
  28%,
  47%,
  72%,
  84%,
  95% {
    transform: translate(-48%, -52%);
  }
`;

const blue = keyframes`
  0%,
  7%,
  40%,
  61%,
  88%,
  100% {
    transform: translate(-50%, -50%);
  }

  5%,
  15%,
  47%,
  72%,
  95% {
    transform: translate(-52%, -48%);
  }
`;

const Wrapper = styled.div`
  background-color: #000;
  position: relative;

  & > span {
    font-family: 'Inter', sans-serif;
    font-size: 10rem;
    font-weight: 900;
    position: absolute;
    text-transform: uppercase;
    top: 50%;
    left: 50%;
    mix-blend-mode: screen;

    &.red {
      color: #f00;
      transform: translate(-48%, -52%);
      animation: ${red} 1.5s linear infinite;
    }

    &.green {
      color: #0f0;
      transform: translate(-50%, -50%);
    }

    &.blue {
      color: #00f;
      transform: translate(-52%, -48%);
      animation: ${blue} 1.5s linear infinite;
    }
  }
`;

const BlockTen = () => (
  <Wrapper>
    <span className="red">ilomilo</span>
    <span className="green">ilomilo</span>
    <span className="blue">ilomilo</span>
  </Wrapper>
);

export default BlockTen;

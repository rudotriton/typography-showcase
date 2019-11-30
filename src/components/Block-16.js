import React from 'react';
import styled, { keyframes } from 'styled-components';

const Rotate1 = keyframes`
  0% {
    z-index: 2;
    transform: translate(-50%, -50%) scale(1.2);
  }

  25% {
    transform: translate(-50%, -100%) scale(1);
    z-index: 1;
  }

  50% {
    z-index: 1;
    transform: translate(-50%, -50%) scale(0.8);
  }

  74% {
    z-index: 1;
  }

  75% {
    z-index: 2;
    transform: translate(-50%, 0) scale(1);
  }

  100% {
    transform: translate(-50%, -50%) scale(1.2);
    z-index: 2;
  }
`;

const Rotate2 = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    z-index: 1;
  }

  25% {
    transform: translate(-50%, 0) scale(1);
  }

  50% {
    z-index: 2;
    transform: translate(-50%, -50%) scale(1.2);
  }

  51% {
    z-index: 1;
  }

  75% {
    transform: translate(-50%, -100%) scale(1);
  }

  100% {
    transform: translate(-50%, -50%) scale(0.8);
    z-index: 1;
  }
`;

const Wrapper = styled.div`
  background-color: #ffcd00;
  position: relative;
`;

const Text = styled.span`
  font-family: "Passion One", sans-serif;
  color: transparent;
  font-weight: 900;
  font-size: 10rem;
  width: fit-content;
  font-style: italic;
  text-transform: uppercase;
  line-height: 7rem;
  text-shadow: 0.5rem 0.5rem 0 #ef044d, 2rem 2rem 0 #000;
  -webkit-text-stroke: 2px #fff;
  animation: ${Rotate2} 4s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5rem;

  &:first-of-type {
    animation: ${Rotate1} 4s linear infinite;
  }
`;

const BlockTwelve = () => (
  <Wrapper>
    <Text>Enemy</Text>
    <Text>Lines</Text>
  </Wrapper>
);

export default BlockTwelve;

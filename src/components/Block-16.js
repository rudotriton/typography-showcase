import React from 'react';
import styled, { keyframes } from 'styled-components';

const SlideFromLeft = keyframes`
  0%,
  15% {
    right: 100%;
  }

  30% {
    right: 30%;
  }

  70% {
    right: 25%;
  }

  85%,
  100% {
    right: -100%;
  }
`;

const SlideFromRight = keyframes`
  0%,
  15% {
    left: 100%;
  }

  30% {
    left: 30%;
  }

  70% {
    left: 25%;
  }

  85%,
  100% {
    left: -100%;
  }
`;

const Wrapper = styled.div`
  background-color: #ffcd00;
  position: relative;
  overflow: hidden;
`;

const Text = styled.span`
  font-family: 'Passion One', sans-serif;
  color: transparent;
  font-weight: 900;
  font-size: 10rem;
  width: fit-content;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-shadow: 0.5rem 0.5rem 0 #ef044d, 2rem 2rem 0 #000;
  -webkit-text-stroke: 2px #fff;
  position: absolute;
  top: 25%;
  animation: ${SlideFromRight} 3s linear infinite alternate;
  padding: 9rem;

  &:first-of-type {
    animation: ${SlideFromLeft} 3s linear infinite alternate;
    top: 0;
  }
`;

const BlockSixteen = () => (
  <Wrapper>
    <Text>Enemy</Text>
    <Text>Lines</Text>
  </Wrapper>
);

export default BlockSixteen;

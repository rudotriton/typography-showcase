import React from 'react';
import styled, { keyframes } from 'styled-components';

const SlideFromLeft = keyframes`
  0% {
    right: 100%;
  }

  15% {
    right: 30%;
  }

  85% {
    right: 25%;
  }

  100% {
    right: -100%;
  }
`;

const SlideFromRight = keyframes`
  0% {
    left: 100%;
  }

  15% {
    left: 30%;
  }

  85% {
    left: 25%;
  }

  100% {
    left: -100%;
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
  letter-spacing: 0.5rem;
  text-shadow: 0.5rem 0.5rem 0 #ef044d, 2rem 2rem 0 #000;
  -webkit-text-stroke: 2px #fff;
  position: absolute;
  top: 35%;
  animation: ${SlideFromRight} 2s linear infinite;
  padding: 5rem;

  &:first-of-type {
    animation: ${SlideFromLeft} 2s linear infinite;
    top: 10%;
  }
`;

const BlockSixteen = () => (
  <Wrapper>
    <Text>Enemy</Text>
    <Text>Lines</Text>
  </Wrapper>
);

export default BlockSixteen;

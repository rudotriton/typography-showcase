import React from 'react';
import styled, { keyframes } from 'styled-components';

const Appear = keyframes`
  0%,
  20% {
    color: rgba(0, 0, 0, 0);
  }

  80%,
  100% {
    color: rgba(0, 0, 0, 1);
  }
`;

const Wrapper = styled.div`
  background-color: #cecece;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 10rem;
  letter-spacing: -0.5rem;
  line-height: 8rem;
  text-transform: uppercase;
  color: #fff;

  &:first-of-type {
    &::after {
      content: 'Were';
      font-size: 9rem;
      font-family: 'Pacifico', sans-serif;
      position: absolute;
      text-transform: capitalize;
      letter-spacing: 0;
      left: 50%;
      transform: translateX(-50%) rotate(-10deg);
      animation: ${Appear} 3s linear infinite alternate;
    }
  }

  &:last-of-type {
    &::after {
      content: 'Young';
      font-size: 9rem;
      font-family: 'Pacifico', sans-serif;
      position: absolute;
      text-transform: capitalize;
      letter-spacing: 0;
      left: 50%;
      transform: translateX(-50%) rotate(-10deg);
      animation: ${Appear} 3s ease-in-out infinite alternate;
    }
  }
`;

const BlockSeventeen = () => (
  <Wrapper>
    <Text>When</Text>
    <Text>You</Text>
  </Wrapper>
);

export default BlockSeventeen;

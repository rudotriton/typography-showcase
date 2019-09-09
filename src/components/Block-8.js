import React from 'react';
import styled, { keyframes } from 'styled-components';

const vertigo1 = keyframes`
  0% {
    transform: translate(-50%, -50%);
  }

  20% {
    transform: translate(-60%, -80%);
  }

  40% {
    transform: translate(-60%, -20%);
  }

  60% {
    transform: translate(-50%, -50%);
  }
`;

const vertigo2 = keyframes`
  0% {
    transform: translate(-50%, -50%);
  }

  20% {
    transform: translate(-60%, -20%);
  }

  40% {
    transform: translate(-40%, -20%);
  }

  60% {
    transform: translate(-50%, -50%);
  }
`;

const vertigo3 = keyframes`
  0% {
    transform: translate(-50%, -50%);
  }

  20% {
    transform: translate(-40%, -20%);
  }

  40% {
    transform: translate(-40%, -80%);
  }

  60% {
    transform: translate(-50%, -50%);
  }
`;

const vertigo4 = keyframes`
  0% {
    transform: translate(-50%, -50%);
  }

  20% {
    transform: translate(-40%, -80%);
  }

  40% {
    transform: translate(-60%, -80%);
  }

  60% {
    transform: translate(-50%, -50%);
  }
`;


const Wrapper = styled.div`
  align-items: center;
  background-color: #3139d9;
  display: flex;
  justify-content: center;
  position: relative;

  span {
    font-family: 'Monoton', sans-serif;
    font-size: 10rem;
    color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .main {
    z-index: 2;
    color: #fff;
  }

  .one {
    animation: ${vertigo1} 4s linear infinite;
  }

  .two {
    animation: ${vertigo2} 4s linear infinite;
  }

  .three {
    animation: ${vertigo3} 4s linear infinite;
  }

  .four {
    animation: ${vertigo4} 4s linear infinite;
  }
`;

const BlockOne = () => (
  <Wrapper>
    <span className="main">Vertigo</span>
    <span className="one">Vertigo</span>
    <span className="two">Vertigo</span>
    <span className="three">Vertigo</span>
    <span className="four">Vertigo</span>
  </Wrapper>
);

BlockOne.defaultProps = {};

BlockOne.propTypes = {};

export default BlockOne;

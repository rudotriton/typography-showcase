import React from 'react';
import styled, { keyframes } from 'styled-components';

const rayAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2ac2ff;
  overflow: hidden;
  position: relative;
`;

const Rays = styled.div`
  position: absolute;
  width: 1000rem;
  height: 1000rem;
  background: repeating-conic-gradient(#fff 0%, #fff 2.5%, #2ac2ff 2.5%, #2ac2ff 5%);
  animation: ${rayAnimation} 20s linear infinite;
`;

const Text = styled.span`
  font-size: 10rem;
  font-family: 'Pacifico', cursive;
  letter-spacing: 10px;
  z-index: 1;
  color: #fff3b2;
  text-shadow: 4px 4px #000000ba;
`;

const BlockThree = () => (
  <Wrapper>
    <Rays />
    <Text>Faith</Text>
  </Wrapper>
);

BlockThree.defaultProps = {};

BlockThree.propTypes = {};

export default BlockThree;

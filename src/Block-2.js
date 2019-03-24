import React from 'react';
import styled, { keyframes } from 'styled-components';

const Flicker = color => keyframes`
  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    text-shadow:
      0 0 40px ${color},
      0 0 40px ${color},
      0 0 40px ${color},
      0 0 10px ${color};
  }

  20%,
  24%,
  55% { text-shadow: none; }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;
  width: 100vw;
  background-color: #ea2169;
  overflow: hidden;
  position: relative;
`;

const Text = styled.span`
  font-size: 20rem;
  text-transform: uppercase;
  font-family: 'Chela One', cursive;
  letter-spacing: 10px;
  z-index: 1;
  color: #ead7de;
  animation: ${Flicker('#ea2169')} 5s linear infinite;
`;

const Circle = styled.div`
  position: absolute;
  z-index: 0;
  width: 1000rem;
  height: 1000rem;
  border-radius: 50rem;
  background: repeating-radial-gradient(circle farthest-side at center center, transparent, transparent 2.5rem, #1d0073 2.5rem, #1d0073 5rem);
`;

const BlockTwo = () => (
  <Wrapper>
    <Circle />
    <Text>Lust</Text>
  </Wrapper>
);

BlockTwo.defaultProps = {};

BlockTwo.propTypes = {};

export default BlockTwo;

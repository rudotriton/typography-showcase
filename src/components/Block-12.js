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
      0 0 30px ${color},
      0 0 20px ${color},
      0 0 10px ${color};
  }

  20%,
  24%,
  55% { text-shadow: none; }
`;

const Wrapper = styled.div`
  background-color: #06003a;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-family: 'Pacifico', cursive;
  font-size: 8rem;
  color: white;
  animation: ${Flicker('#00FFF0')} 4s alternate infinite;
`;

const BlockTwelve = () => (
  <Wrapper>
    <Text>Cinnamon</Text>
  </Wrapper>
);

BlockTwelve.defaultProps = {};

BlockTwelve.propTypes = {};

export default BlockTwelve;

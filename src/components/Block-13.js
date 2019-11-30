import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0%,
  40% {
    transform: rotate(0deg);
  }

  50%,
  90% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
const sunMoonRotate = keyframes`
  0%,
  40% {
    transform: rotate(0deg) translate(-50%, -50%);
  }

  50%,
  90% {
    transform: rotate(180deg) translate(50%, 50%);
  }

  100% {
    transform: rotate(360deg) translate(-50%, -50%);
  }
`;

const smoothOcean = keyframes`
  0%,
  40% {
    background: #1B46EF;
  }

  50%,
  90% {
    background: #030733;
  }

  100% {
    background: #1B46EF;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Horizon = styled.div`
  background:
    linear-gradient(
      180deg,
      #fe5f75 0%,
      #fc9842 50%,
      #0064ad 50.01%,
      #000b72 100%
    );
  height: 100%;
  width: 100%;
  animation: ${rotate} 8s ease-in-out infinite;
`;

const SunMoon = styled.div`
  background:
    linear-gradient(
      180deg,
      #ff9a15 9.17%,
      #ff7715 22.89%,
      #f41d1d 50%,
      #fffdea 50.01%
    );
  height: 20rem;
  width: 20rem;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 10rem;
  animation: ${sunMoonRotate} 8s ease-in-out infinite;
`;

const Sea = styled.div`
  position: absolute;
  height: 50%;
  width: 100%;
  top: 50%;
  background: #e5326a;
  animation: ${smoothOcean} 8s ease-in-out infinite;
`;

const Text = styled.span`
  font-family: 'Pacifico', cursive;
  mix-blend-mode: exclusion;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -65%);
  font-size: 10rem;
  z-index: 10;
  color: #FF2100;
`;

const BlockThirteen = () => (
  <Wrapper>
    <Horizon />
    <Text>Change</Text>
    <SunMoon />
    <Sea />
  </Wrapper>
);

export default BlockThirteen;

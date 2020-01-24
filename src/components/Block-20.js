import React from 'react';
import styled, { keyframes } from 'styled-components';
import Star from './Star';

const toLeft = keyframes`
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
`;

const shake = keyframes`
  0%,
  100% {
    transform: translate(0, -1rem);
  }

  50% {
    transform: translate(0, 1rem);
  }
`;

const Blink = () => keyframes`
  0% { transform: translate(-50%, -50%) scale(0.15); }
  50% { transform: translate(-50%, -50%) scale(0.4); }
  100% { transform: translate(-50%, -50%) scale(0.15); }
`;

const Wrapper = styled.div`
  background-color: #ef3619;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Text = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 12rem;
  color: white;
  font-weight: 900;
  background: #000;
  z-index: 3;
  display: flex;
  padding: 0.5rem 2rem;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  background: #000;
  width: 40rem;
  height: 20rem;
  position: absolute;
  z-index: 1;
  overflow: hidden;
  transform-origin: right top;
  transform: rotate(-55deg) translate(-20rem, -20rem);
`;

const random = (max) => Math.floor(Math.random() * Math.floor(max));

const Line = styled.div`
  height: 2rem;
  width: ${(p) => p.w}rem;
  top: ${(p) => p.t}%;
  background: ${(p) => (p.c ? '#f4de12' : '#ef3619')};
  animation: ${toLeft} ${(p) => p.s}s linear ${(p) => p.delay}s infinite;
  z-index: 2;
  left: 100%;
  border-radius: 3rem;
  position: absolute;
`;

const ElementWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${shake} 1.5s linear infinite;
  position: relative;
`;

const Twenty = () => {
  const createLines = () => {
    const lines = [];
    for (let i = 0; i <= 25; i += 1) {
      const w = Math.floor(Math.random() * Math.floor(10));
      const top = Math.floor(Math.random() * Math.floor(70));
      const speed = Math.floor(Math.random() * Math.floor(2));
      const color = Math.floor(Math.random() * Math.floor(2));

      lines.push(
        <Line key={i} delay={i * 0.2} w={w + 10} t={top + 5} c={color} s={speed + 1} />,
      );
    }
    return lines;
  };
  return (
    <Wrapper>
      <Star x={85} y={22} animation={Blink} speed={2} delay={random(8) + 1} />
      <Star x={16} y={35} animation={Blink} speed={2} delay={random(8) + 1} />
      <Star x={75} y={60} animation={Blink} speed={2} delay={random(8) + 1} />
      <ElementWrapper>
        <Text>AF</Text>
        <Box>
          {
            createLines()
          }
        </Box>
      </ElementWrapper>
    </Wrapper>
  );
};

export default Twenty;

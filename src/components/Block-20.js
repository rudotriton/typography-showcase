import React from "react";
import styled, { keyframes } from "styled-components";
import Star from "./Star";

const toLeft = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-1000%, 0, 0);
  }
`;

const hover = keyframes`
  0%,
  100% {
    transform: translate3d(-50%, -50%, 0);
  }

  50% {
    transform: translate3d(-50%, -45%, 0);
  }
`;

const Blink = () => keyframes`
  0% { transform: translate3d(-50%, -50%, 0) rotate(0) scale(0.15); }
  50% { transform: translate3d(-50%, -50%, 0) rotate(180deg) scale(0.4); }
  100% { transform: translate3d(-50%, -50%, 0) rotate(360deg) scale(0.15); }
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
  font-family: "Inter", sans-serif;
  width: 20rem;
  height: 13rem;
  font-size: 12rem;
  color: white;
  text-align: center;
  font-weight: 900;
  background: #000;
  position: absolute;
  z-index: 3;
  display: grid;
  place-items: center;
`;

const Box = styled.div`
  background: #000;
  width: 40rem;
  height: 23.85rem;
  position: absolute;
  z-index: 1;
  overflow: hidden;
  transform-origin: right top;
  transform: translate3d(-100%, 0, 0) rotate(-57deg);
`;

const random = (max) => Math.floor(Math.random() * Math.floor(max));

const Line = styled.div`
  height: 2rem;
  width: ${(p) => p.w}rem;
  top: ${(p) => p.t}%;
  background: ${(p) => (p.c ? "#f4de12" : "#ef3619")};
  animation: ${toLeft} ${(p) => p.s}s linear ${(p) => p.delay}s infinite;
  transform: translate3d(0, 0, 0);
  z-index: 2;
  left: 100%;
  border-radius: 3rem;
  position: absolute;
`;

const ElementWrapper = styled.div`
  width: 20rem;
  height: 13rem;
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${hover} 1.5s linear infinite;
  transform: translate3d(0, 0, 0);
`;

function Twenty() {
  const createLines = () => {
    const lines = [];
    for (let i = 0; i <= 25; i += 1) {
      const w = Math.floor(Math.random() * Math.floor(10));
      const top = Math.floor(Math.random() * Math.floor(70));
      const speed = Math.floor(Math.random() * Math.floor(2));
      const color = Math.floor(Math.random() * Math.floor(2));

      lines.push(
        <Line
          key={i}
          delay={i * 0.2}
          w={w + 10}
          t={top + 5}
          c={color}
          s={speed + 1}
        />
      );
    }
    return lines;
  };
  return (
    <Wrapper>
      <Star x={85} y={22} animation={Blink} speed={4} delay={random(8) + 1} />
      <Star x={16} y={35} animation={Blink} speed={4} delay={random(8) + 1} />
      <Star x={75} y={60} animation={Blink} speed={4} delay={random(8) + 1} />
      <ElementWrapper>
        <Box>{createLines()}</Box>
        <Text>AF</Text>
      </ElementWrapper>
    </Wrapper>
  );
};

export default Twenty;

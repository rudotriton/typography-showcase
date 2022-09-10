import React from "react";
import styled, { keyframes } from "styled-components";

const colors1 = [
  "#ffc8f2",
  "#fe8ce2",
  "#fe7fdf",
  "#fc66d8",
  "#fa4ed2",
  "#f638cd",
  "#f225c8",
  "#ed15c4",
  "#e707c1",
  "#e000c0",
  "#d700bf",
  "#cd00bc",
  "#c100b9",
  "#b300a5",
  "#9e00a5",
  "#8a0096",
  "#770087",
];

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const perspectiveMotion = (distance) => keyframes`
  from {
    transform: translate3d(calc(${-distance}px - 50%), -50%, 0) rotate(0deg);
  }

  25% {
    transform: translate3d(calc(${-distance}px - 50%), -50%, 0) rotate(90deg);
  }

  50% {
    transform: translate3d(calc(${-distance}px - 50%), -50%, 0)rotate(180deg);
  }

  75% {
    transform: translate3d(calc(${-distance}px - 50%), -50%,  0) rotate(270deg);
  }

  to {
    transform: translate3d(calc(${-distance}px - 50%), -50%, 0) rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Gradient = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -20;
  background: linear-gradient(
    45deg,
    rgba(0, 68, 200, 1) 0%,
    rgba(144, 0, 229, 1) 63%,
    rgba(201, 0, 48, 1) 100%
  );
`;

const Rotater = styled.div`
  position: relative;
  animation: ${rotate} 6s linear infinite;
`;

const Text = styled.span`
  font-size: 10rem;
  position: absolute;
  text-transform: uppercase;
  font-family: "Passion One", sans-serif;
  letter-spacing: 10px;
  z-index: ${(p) => p.z};
  color: ${(p) => p.color};
  animation: ${(p) => perspectiveMotion(p.distance)} 6s linear infinite;
  transform: translate3d(0, 0, 0);
`;

function BlockFour() {
  return (
    <Wrapper>
      <Gradient />
      <Rotater>
        {colors1.map((color, idx) => (
          <Text key={`${idx + color}`} color={color} distance={idx} z={-idx}>
            Dreams
          </Text>
        ))}
      </Rotater>
    </Wrapper>
  );
}

export default BlockFour;

import React from "react";
import styled, { keyframes } from "styled-components";

const first = keyframes`
  0%,
  40% {
    opacity: 0;
  }

  41%,
  100% {
    opacity: 1;
  }
`;

const second = keyframes`
  0%,
  50% {
    opacity: 0;
  }

  51%,
  100% {
    opacity: 1;
  }
`;

const colors = [
  "#fa8688",
  "#f55759",
  "#ED3034",
  "#E41317",
  "#D70004",
  "#C70003",
  "#B30003",
  "#9E0003",
  "#870002",
  "#660000",
];

const shadowGen = (start, step, iterations) => {
  let shadow = "";
  let pos = start;
  colors.forEach((color) => {
    for (let i = 0; i < iterations; i += 1) {
      shadow += `${pos}px ${pos}px 0 ${color}, `;
      pos += step;
    }
  });
  shadow = shadow.slice(0, -2);
  return shadow;
};

const Wrapper = styled.div`
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 14rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -3rem;
  text-shadow: ${shadowGen(0, 0.25, 8)};
  color: transparent;
  padding: 5rem;
  position: relative;
`;

const One = styled.span`
  opacity: 1;
  animation: ${first} 4s linear infinite alternate;
  position: absolute;
  transform: translate3d(-70%, -70%, 0);
`;

const Two = styled.span`
  opacity: 0;
  animation: ${second} 4s linear infinite alternate;
  position: absolute;
  transform: translate3d(-50%, -13%, 0);
`;

const BlockEleven = () => (
  <Wrapper>
    <Text>
      <One>Bang</One>
      <Two>Bang</Two>
    </Text>
  </Wrapper>
);

export default BlockEleven;

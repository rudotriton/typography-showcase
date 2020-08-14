import React from "react";
import styled, { keyframes } from "styled-components";

const wave = (xpos) => keyframes`
  0%,
  100% {
    transform: translate3d(${xpos}rem, 0, 0);
  }

  50% {
    transform: translate3d(${xpos}rem, 200%, 0);
  }
`;

const Wrapper = styled.div`
  background-color: #fff;
  position: relative;
  overflow: hidden;
`;

const Text = styled.span`
  font-family: "Inter", sans-serif;
  text-shadow: -1px -1px #000, 1px -1px #000, 1px 1px #000, -1px 1px #000;
  font-size: 10rem;
  color: #fff;
  position: absolute;
  animation: ${(p) => wave(p.xpos)} 8s ease-in-out ${(p) => p.delay}s infinite;
  transform: translate3d(${(p) => p.xpos}rem, 0, 0);
`;

const BlockFourteen = () => {
  const generateWaves = () => {
    const waves = [];
    for (let i = 1; i < 50; i += 1) {
      waves.push(
        <Text xpos={i * 1.1} delay={0.2 * i} key={i}>
          {"<wave>"}
        </Text>
      );
    }
    return waves.reverse();
  };
  return <Wrapper>{generateWaves()}</Wrapper>;
};

export default BlockFourteen;

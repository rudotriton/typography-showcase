import React from "react";
import styled, { keyframes } from "styled-components";

const fade = keyframes`
  0%,
  24%,
  27%,
  50%,
  53%,
  61%,
  64%,
  65%,
  68%,
  100% {
    filter: invert(0);
  }

  25%,
  26%,
  51%,
  52%,
  62%,
  63%,
  66%,
  67% {
    filter: invert(0.5);
  }
`;

const Wrapper = styled.div`
  align-items: center;
  background-color: #000;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const Text = styled.span`
  color: rgba(255, 0, 107, 0.75);
  font-family: "Inter", sans-serif;
  font-size: 10rem;
  font-weight: 900;
  text-transform: uppercase;
  z-index: 1;
  animation: ${fade} 8s linear infinite;
  transform: translate3d(0, 0, 0);

  &::before {
    content: "Manic";
    position: absolute;
    color: #ffc500;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    font-style: italic;
  }
`;

const BlockFive = () => (
  <Wrapper>
    <Text>Manic</Text>
  </Wrapper>
);

export default BlockFive;

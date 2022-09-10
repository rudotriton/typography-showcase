import React from "react";
import styled, { keyframes } from "styled-components";

const red = keyframes`
  0%,
  7%,
  19%,
  40%,
  61%,
  78%,
  88%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  5%,
  15%,
  28%,
  47%,
  72%,
  84%,
  95% {
    transform: translate3d(0.07em, -0.07em, 0);
  }
`;

const blue = keyframes`
  0%,
  7%,
  40%,
  61%,
  88%,
  100% {
    transform: translate3d(-100%, 0, 0);
  }

  5%,
  15%,
  47%,
  72%,
  95% {
    transform: translate3d(calc(-100% - 0.07em), 0.07em, 0);
  }
`;

const first = keyframes`
  0%,
  7%,
  40%,
  61%,
  88%,
  100% {
    transform: translate3d(-50%, -50%, 0);
  }

  5%,
  15%,
  47%,
  72%,
  95% {
    transform: translate3d(-52%, -52%, 0);
  }
`;

const last = keyframes`
  0%,
  7%,
  40%,
  61%,
  88%,
  100% {
    transform: translate3d(-50%, -50%, 0);
  }

  5%,
  15%,
  47%,
  72%,
  95% {
    transform: translate3d(-48%, -50%, 0);
  }
`;

const Wrapper = styled.div`
  background-color: #000;
  position: relative;

  & span {
    font-family: "Inter", sans-serif;
    font-size: 10rem;
    font-weight: 900;
    position: absolute;
    text-transform: uppercase;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    mix-blend-mode: screen;
    color: #0f0;

    &::after {
      mix-blend-mode: screen;
      content: "ilomilo";
      position: absolute;
      color: #00f;
      transform: translate3d(calc(-100% - 0.07em), 0.07em, 0);
      animation: ${blue} 1.5s linear infinite;
    }

    &::before {
      mix-blend-mode: screen;
      content: "ilomilo";
      position: absolute;
      color: #f00;
      transform: translate3d(0.07em, -0.07em, 0);
      animation: ${red} 1.5s linear infinite;
    }

    &.first {
      transform: translate3d(-52%, -52%, 0);
      clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
      animation: ${first} 1s linear infinite;
    }
    &.last {
      transform: translate3d(-48%, -44%, 0);
      clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
      animation: ${last} 2s linear infinite;
    }
  }
`;

function BlockTen() {
  return (
    <Wrapper>
      <span className="first" aria-hidden="true">
        ilomilo
      </span>
      <span>ilomilo</span>
      <span className="last" aria-hidden="true">
        ilomilo
      </span>
    </Wrapper>
  );
}

export default BlockTen;

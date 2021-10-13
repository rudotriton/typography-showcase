import React from "react";
import styled, { keyframes } from "styled-components";

const slideIn = (ypos) => keyframes`
  0%,
  15% {
    transform: translate3d(-300%, ${ypos}%, 0);
  }

  30% {
    transform: translate3d(-60%, ${ypos}%, 0);
  }

  70% {
    transform: translate3d(-40%, ${ypos}%, 0);
  }

  85%,
  100% {
    transform: translate3d(300%, ${ypos}%, 0);
  }
`;

const Wrapper = styled.div`
  background-color: #ffcd00;
  position: relative;
  overflow: hidden;
`;

const Text = styled.span`
  font-family: "Passion One", sans-serif;
  color: transparent;
  font-weight: 900;
  font-size: 10rem;
  width: fit-content;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-shadow: 0.5rem 0.5rem 0 #ef044d, 2rem 2rem 0 #000;
  -webkit-text-stroke: 2px #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${slideIn(0)} 3s linear infinite reverse;
  transform: translate3d(-20%, 0, 0);

  &:first-of-type {
    animation: ${slideIn(-100)} 3s linear infinite;
    transform: translate3d(-80%, -100%, 0);
  }
`;

const BlockSixteen = () => (
  <Wrapper>
    <Text>Enemy</Text>
    <Text>Lines</Text>
  </Wrapper>
);

export default BlockSixteen;

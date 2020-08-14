import React from "react";
import styled, { keyframes } from "styled-components";
import media from "util/mediaQueries";

const appear = keyframes`
  0% {
    opacity: 0
  }

  20% {
    opacity: 1;
  }

  60% {
    opacity: 1;
  }

  65% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`;

const wave = keyframes`
  0%,
  50% {
    transform: translate3d(0, 500px, 0) rotate(45deg);
  }

  25% {
    transform: translate3d(0, -200px, 0) rotate(45deg);
  }
`;

const Wrapper = styled.div`
  align-items: center;
  background-color: #f2dba4;
  display: flex;
  font-family: "Inter", sans-serif;
  font-size: 10rem;
  font-weight: 900;
  justify-content: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const Text = styled.span`
  color: #f2dba4;
  letter-spacing: 0.08em;
  &::before {
    content: "Beaches";
    position: absolute;
    color: rgba(0, 0, 0, 0.6);
    top: 50%;
    left: 50%;
    transform: translate(-49%, -46%);
    z-index: -1;
    animation: ${appear} 8s linear infinite;
  }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Waves = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translate3d(0, 500px, 0) rotate(45deg);
  animation: ${wave} 8s ease-in-out 4s infinite;

  & > div {
    position: absolute;
    opacity: 0.4;
    width: 90vw;
    height: 85vw;
    border-radius: 43%;
    ${media.widelet`
      width: 1600px;
      height: 1600px;
    `}
  }

  & > .one {
    animation: ${rotate} 7s infinite linear;
    background: rgba(0, 160, 255, 0.6);
  }

  & > .two {
    animation: ${rotate} 3s infinite linear;
    background: rgba(0, 0, 0, 0.3);
  }

  & > .three {
    animation: ${rotate} 7.5s infinite linear;
    background: rgba(119, 218, 255, 0.6);
  }
`;

const BlockSeven = () => (
  <Wrapper>
    <Text>Beaches</Text>
    <Waves>
      <div className="one" />
      <div className="two" />
      <div className="three" />
    </Waves>
  </Wrapper>
);

export default BlockSeven;

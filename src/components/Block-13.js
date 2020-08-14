import React from "react";
import styled, { keyframes } from "styled-components";

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

const smoothOcean = keyframes`
  0%,
  40% {
    opacity: 0;
  }

  50%,
  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
`;

const Horizon = styled.div`
  background: linear-gradient(
    180deg,
    #fe5f75 40%,
    #fc9842 50%,
    #0064ad 50.01%,
    #000b72 60%
  );
  height: 400%;
  width: 400%;
  display: grid;
  place-items: center;
  animation: ${rotate} 8s ease-in-out infinite;
`;

const SunMoon = styled.div`
  background: linear-gradient(
    180deg,
    #ff9a15 9.17%,
    #ff7715 22.89%,
    #f41d1d 50%,
    #fffdea 50.01%
  );
  height: 20rem;
  width: 20rem;
  border-radius: 10rem;
`;

const Sea = styled.div`
  position: absolute;
  height: 50%;
  width: 100%;
  top: 50%;
  background-color: #1b46ef;
  &:after {
    content: "";
    background-color: #030733;
    position: absolute;
    width: 100%;
    height: 100%;
    animation: ${smoothOcean} 8s ease-in-out infinite;
  }
`;

const Text = styled.span`
  font-family: "Pacifico", cursive;
  mix-blend-mode: difference;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -65%);
  font-size: 10rem;
  z-index: 10;
  color: #ff2100;
`;

const BlockThirteen = () => (
  <Wrapper>
    <Horizon>
      <SunMoon />
    </Horizon>
    <Text>Change</Text>
    <Sea />
  </Wrapper>
);

export default BlockThirteen;

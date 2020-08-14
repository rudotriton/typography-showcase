import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import BlinkingStar from "./BlinkingStar";

const Appear = keyframes`
  0%,
  40% {
    transform: translate3d(-50%, 0 ,0) rotate(-10deg) scale(100);
  }

  60% {
    transform: translate3d(-50%, 0 ,0) rotate(-10deg) scale(1);
  }

  81% {
    transform: translate3d(-50%, 0 ,0) rotate(-10deg) scale(1);
    opacity: 1;
  }

  100% {
    transform: translate3d(-50%, 0 ,0) rotate(-10deg) scale(1);
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  background-color: #000d53;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-family: "Passion One", sans-serif;
  font-size: 10rem;
  text-transform: uppercase;
  color: #0122d6;

  &::after {
    content: "You're a star";
    font-size: 6rem;
    color: #fff;
    font-family: "Pacifico", sans-serif;
    width: fit-content;
    position: absolute;
    text-transform: capitalize;
    letter-spacing: 0;
    left: 50%;
    padding: 2rem;
    transform: translate3d(-50%, 0, 0) rotate(-10deg);
    animation: ${Appear} 7s ease-in-out infinite;
    position: absolute;
  }
`;

const BlockEighteen = () => {
  const [x] = useState(85);
  const [y] = useState(40);
  return (
    <Wrapper>
      <Text>Andy</Text>
      <BlinkingStar x={x} y={y} speed={7} />
    </Wrapper>
  );
};

export default BlockEighteen;

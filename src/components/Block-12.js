import React from "react";
import styled, { keyframes } from "styled-components";

const Flicker = keyframes`
  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    opacity: 1;
  }

  20%,
  24%,
  55% { opacity: 0; }
`;

const Wrapper = styled.div`
  background-color: #06003a;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-family: "Pacifico", cursive;
  font-size: 8rem;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);

  &:after {
    content: "Cinnamon";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: -1;
    text-shadow: 0 0 40px #00fff0, 0 0 30px #00fff0, 0 0 20px #00fff0,
      0 0 10px #00fff0;
    animation: ${Flicker} 4s alternate infinite;
  }
`;

const BlockTwelve = () => (
  <Wrapper>
    <Text>Cinnamon</Text>
  </Wrapper>
);

export default BlockTwelve;

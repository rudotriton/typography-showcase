import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform:
      rotate(0deg)
      translate3d(-80px, 0, 0);
  }

  to {
    transform:
      rotate(360deg)
      translate3d(-80px, 0, 0);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ea2169;
  overflow: hidden;
  position: relative;
`;

const Text = styled.span`
  font-size: 10rem;
  text-transform: uppercase;
  font-family: "Chela One", cursive;
  letter-spacing: 10px;
  z-index: 1;
  color: #ead7de;
  text-shadow: 1px 1px #fff, 2px 2px #fff, 3px 3px #fff, 4px 4px #fff,
    5px 5px #fff, 6px 6px #fff, 7px 7px #fff, 8px 8px #fff;
`;

const Circle = styled.div`
  position: absolute;
  z-index: 0;
  width: 1000rem;
  height: 1000rem;
  border-radius: 50rem;
  background: repeating-radial-gradient(
    circle farthest-side at center center,
    transparent,
    transparent 2.5rem,
    #1d0073 2.5rem,
    #1d0073 5rem
  );
  animation: ${rotate} 8s linear infinite;
  transform: translate3d(0, 0, 0);
`;

function BlockTwo() {
  return (
    <Wrapper>
      <Circle />
      <Text>Lust</Text>
    </Wrapper>
  );
}

export default BlockTwo;

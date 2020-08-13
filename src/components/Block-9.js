import React from "react";
import styled, { keyframes } from "styled-components";

const scan = keyframes`
  0%,
  100% {
    transform: translate3d(-250%, 0, 0);
  }

  13%,
  60%,
  72% {
    transform: translate3d(300%, 0, 0);
  }

  27%,
  65%,
  80% {
    transform: translate3d(-100%, 0, 0);
  }

  50%,
  70% {
    transform: translate3d(150%, 0, 0);
  }
`;

const Wrapper = styled.div`
  align-items: center;
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: #000;
  overflow: hidden;
`;

const Text = styled.span`
  font-family: "Anton", sans-serif;
  color: #000;
  font-size: 10rem;
  text-shadow: -1px -1px #fff, 1px -1px #fff, 1px 1px #fff, -1px 1px #fff,
    0 1rem #fff;
  text-transform: uppercase;
`;

const Overlay = styled.div`
  position: absolute;
  background-color: white;
  width: 100px;
  height: 100%;
  mix-blend-mode: difference;
  animation: ${scan} 5s linear infinite;
  transform: translate3d(-200%, 0, 0);
`;

const BlockNine = () => (
  <Wrapper>
    <Text
      style={{
        marginBottom: "-1.35rem",
        letterSpacing: "-0.04em",
      }}
    >
      My Strange
    </Text>
    <Text
      style={{
        marginTop: "-1.35rem",
        marginLeft: "1.1rem",
        letterSpacing: "0.066em",
      }}
    >
      Addiction
    </Text>
    <Overlay />
  </Wrapper>
);

export default BlockNine;

import React from "react";
import styled, { keyframes } from "styled-components";

const Appear = keyframes`
  0%,
  10%,
  90%,
  100% {
    opacity: 0;
  }
  
  50% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  background-color: #efeeee;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -10;
`;

const Text = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 10rem;
  line-height: 8rem;
  color: #efeeee;
`;

const Letter = styled.span`
  opacity: 0;
  animation: ${Appear} 6s ease-in-out ${(p) => p.delay}s infinite;
  &:after {
    filter: blur(5px);
    position: absolute;
    z-index: -1;
    content: ${(p) => `"${p.letter}"`};
    transform: translate3d(-104%, -5%, 0);
    color: rgba(255, 255, 255, 0.9);
  }
  &:before {
    filter: blur(5px);
    position: absolute;
    z-index: -1;
    content: ${(p) => `"${p.letter}"`};
    transform: translate3d(3%, 4%, 0);
    color: rgba(0, 0, 0, 0.15);
  }
`;

function BlockSeventeen() {
  const createLetters = (text, delay) =>
    text.split("").map((letter, i) => (
      <Letter key={`${i + letter}`} letter={letter} delay={(delay + i) * 0.2}>
        {letter}
      </Letter>
    ));
  return (
    <Wrapper>
      <Text>{createLetters("Les Yeux", 0)}</Text>
      <Text>{createLetters("Sans Visage", 11)}</Text>
    </Wrapper>
  );
};
export default BlockSeventeen;

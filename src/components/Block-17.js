import React from 'react';
import styled, { keyframes } from 'styled-components';

const Appear = keyframes`
  0%,
  10%,
  90%,
  100% {
    text-shadow: none;
  }
  
  50% {
    text-shadow:
    -0.2rem -0.2rem 1rem rgba(255, 255, 255, 0.9),
    0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.15);
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
`;

const Text = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 10rem;
  line-height: 8rem;
  color: #efeeee;
  
`;

const Letter = styled.span`
  animation: ${Appear} 6s ease-in-out ${p => p.delay}s infinite;
`;

const BlockSeventeen = () => {
  const createLetters = (text, delay) => text.split('').map((letter, i) => <Letter delay={(delay + i) * 0.2}>{letter}</Letter>);
  return (
    <Wrapper>
      <Text>{createLetters('Les Yeux', 0)}</Text>
      <Text>{createLetters('Sans Visage', 11)}</Text>
    </Wrapper>
  );
};
export default BlockSeventeen;

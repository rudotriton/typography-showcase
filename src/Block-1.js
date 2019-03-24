import React from 'react';
import styled, { keyframes } from 'styled-components';

const colors = [
  '#fe8ce2',
  '#fe7fdf',
  '#fc66d8',
  '#fa4ed2',
  '#f638cd',
  '#f225c8',
  '#ed15c4',
  '#e707c1',
  '#e000c0',
  '#d700bf',
  '#cd00bc',
  '#c100b9',
  '#b300a5',
  '#9e00a5',
  '#8a0096',
  '#770087',
];

const perspective = (x, y) => {
  let shadowPos = '';
  for (let i = 1; i < colors.length; i += 1) {
    shadowPos += `${x}${i}px ${y}${i}px ${colors[i]}, `;
  }
  shadowPos = shadowPos.slice(0, -2);
  return shadowPos;
};

const perspectiveMotion = keyframes`
  from {
    text-shadow: ${perspective('-', '-')};
  }

  25% {
    text-shadow: ${perspective('', '-')};
  }

  50% {
    text-shadow: ${perspective('', '')};
  }

  75% {
    text-shadow: ${perspective('-', '')};
  }

  to {
    text-shadow: ${perspective('-', '-')};
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40rem;
  width: 100vw;
  background-color: #1d0073;
  overflow: hidden;
  position: relative;
`;

const Text = styled.span`
  font-size: 20rem;
  text-transform: uppercase;
  font-family: 'Passion One', cursive;
  letter-spacing: 10px;
  color: #ffd0f3;
  animation: ${perspectiveMotion} 3s linear infinite;
`;

const BlockOne = () => (
  <Wrapper>
    <Text>Love</Text>
  </Wrapper>
);

export default BlockOne;

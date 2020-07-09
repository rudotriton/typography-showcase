import React from 'react';
import styled, { keyframes } from 'styled-components';

const colors1 = [
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

const colors2 = [
  '#F2FAFF',
  '#DEF2FE',
  '#CBEAFE',
  '#A4D8FC',
  '#7EC6F9',
  '#5DB3F5',
  '#409FF1',
  '#278AEB',
  '#1375E4',
  '#045EDB',
  '#004CD0',
  '#003BC4',
  '#002BB6',
  '#001BA7',
  '#000F97',
  '#000587',
];

const perspective = (x, y, colors) => {
  let shadowPos = '';
  for (let i = 1; i < colors.length; i += 1) {
    shadowPos += `${x}${i}px ${y}${i}px ${colors[i]}, `;
  }
  shadowPos = shadowPos.slice(0, -2);
  return shadowPos;
};

const perspectiveMotion = keyframes`
  from {
    text-shadow: ${perspective('-', '-', colors1)};
  }

  12.5% {
    text-shadow: ${perspective('', '-', colors1)};
  }

  25% {
    text-shadow: ${perspective('', '', colors1)};
  }

  37.5% {
    text-shadow: ${perspective('-', '', colors1)};
  }

  50% {
    text-shadow: ${perspective('-', '-', colors2)};
  }

  62.5% {
    text-shadow: ${perspective('', '-', colors2)};
  }

  75% {
    text-shadow: ${perspective('', '', colors2)};
  }

  87.5% {
    text-shadow: ${perspective('-', '', colors2)};
  }

  to {
    text-shadow: ${perspective('-', '-', colors1)};
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Gradient = styled.div`
  height: 100rem;
  width: 200vw;
  position: absolute;
  z-index: -1;
  background: linear-gradient(
    90deg,
    rgba(0, 68, 200, 1) 0%,
    rgba(144, 0, 229, 1) 63%,
    rgba(201, 0, 48, 1) 100%
  );
`;

const Text = styled.span`
  font-size: 10rem;
  text-transform: uppercase;
  font-family: 'Passion One', sans-serif;
  letter-spacing: 10px;
  color: rgba(255, 255, 255, 0.8);
  animation: ${perspectiveMotion} 6s linear infinite;
`;

const BlockFour = () => (
  <Wrapper>
    <Gradient />
    <Text>Dreams</Text>
  </Wrapper>
);

export default BlockFour;

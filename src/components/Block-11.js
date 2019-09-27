import React from 'react';
import styled, { keyframes } from 'styled-components';

const first = keyframes`
  0%,
  40%,
  100% {
    opacity: 0;
  }

  41%,
  99% {
    opacity: 1;
  }
`;

const second = keyframes`
  0%,
  50%,
  100% {
    opacity: 0;
  }

  51%,
  99% {
    opacity: 1;
  }
`;

const colors = [
  '#fa8688',
  '#f55759',
  '#ED3034',
  '#E41317',
  '#D70004',
  '#C70003',
  '#B30003',
  '#9E0003',
  '#870002',
  '#660000',
];

const shadowGen = (start, step) => {
  let shadow = '';
  let pos = start;
  colors.forEach((color) => {
    shadow += `${pos}px ${pos}px 0 ${color}, `;
    pos += step;
  });
  shadow = shadow.slice(0, -2);
  return shadow;
};

const Wrapper = styled.div`
  background-color: #000;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 14rem;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 9rem;
  letter-spacing: -3rem;
  text-shadow: ${shadowGen(0, 2)};
  color: transparent;
  padding: 5rem;
`;

const One = styled.span`
  opacity: 0;
  animation: ${first} 4s linear infinite;
`;
const Two = styled.span`
  opacity: 0;
  animation: ${second} 4s linear infinite;
`;

const BlockEleven = () => (
  <Wrapper>
    <Text>
      <One>Bang</One>
      <br />
      <Two>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bang
      </Two>
    </Text>
  </Wrapper>
);

export default BlockEleven;

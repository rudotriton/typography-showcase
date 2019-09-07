import React from 'react';
import styled, { keyframes } from 'styled-components';

const red = '#F40000';
const green = '#04E762';
const blue = '#2176FF';
const yellow = '#FFBA00';
const pink = '#DC0073';

const zebraShadow = (size, colors) => {
  let textShadow = '';
  for (let i = 0; i < colors.length; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const pos = (i) * size + j;
      const shadow = `${pos}px ${pos}px ${colors[i]}, `;
      textShadow += shadow;
    }
  }
  textShadow = textShadow.slice(0, -2);
  return textShadow;
};

const shadowAnimation = keyframes`
  from,
  19.9% {
    text-shadow:
      ${zebraShadow(5,
    [blue, pink, yellow, red, green,
      blue, pink, yellow, red, green])};
  }

  20%,
  39.9% {
    text-shadow:
      ${zebraShadow(5,
    [green, blue, pink, yellow, red,
      green, blue, pink, yellow, red])};
  }

  40%,
  59.9% {
    text-shadow:
      ${zebraShadow(5,
    [red, green, blue, pink, yellow,
      red, green, blue, pink, yellow])};
  }

  60%,
  79.9% {
    text-shadow:
      ${zebraShadow(5,
    [yellow, red, green, blue, pink,
      yellow, red, green, blue, pink])};
  }

  80%,
  to {
    text-shadow:
      ${zebraShadow(5,
    [pink, yellow, red, green, blue,
      pink, yellow, red, green, blue])};
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  width: 50vw;
  background-color: #fff;
  overflow: hidden;
  position: relative;
`;

const Text = styled.span`
  font-size: 10rem;
  font-family: 'Parisienne', cursive;
  letter-spacing: 10px;
  z-index: 1;
  color: transparent;
  animation: ${shadowAnimation} 0.75s linear infinite;
`;

const BlockOne = () => (
  <Wrapper>
    <Text>Love</Text>
  </Wrapper>
);

BlockOne.defaultProps = {};

BlockOne.propTypes = {};

export default BlockOne;

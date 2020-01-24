import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  animation: ${(p) => p.s}s ${(p) => p.a} 0.${(p) => p.d}s infinite ease-in-out;
  position: absolute;
  height: 100px;
  width: 100px;
  left: ${(props) => props.x}%;
  top: ${(props) => props.y}%;
  transform: translate(-50%, -50%) scale(0);
  fill: white;
`;

const Star = ({
  // eslint-disable-next-line react/prop-types
  x, y, animation, speed = 7, delay,
}) => (
  <Svg x={x} y={y} a={animation} s={speed} d={delay} viewBox="0 0 100 100">
    <path d="M50,0 C50,37 63,50 100,50 C63,50 50,63 50,100 C50,63 37,50 0,50 C37,50 50,37 50,0 Z" />
  </Svg>
);

export default Star;

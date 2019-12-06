import React from 'react';
import styled, { keyframes } from 'styled-components';

const Blink = () => keyframes`
  0%,
  60% { transform: translate(-50%, -50%) scale(0); }
  80% { transform: translate(-50%, -50%) scale(0.3); }
  100% { transform: translate(-50%, -50%) scale(0); }
`;

const Svg = styled.svg`
  animation: 7s ${Blink} infinite ease-in-out;
  position: absolute;
  height: 100px;
  width: 100px;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  transform: translate(-50%, -50%) scale(0);
  fill: white;
`;

// eslint-disable-next-line react/prop-types
const Star = ({ x, y }) => (
  <Svg x={x} y={y} viewBox="0 0 100 100">
    <path d="M50,0 C50,37 63,50 100,50 C63,50 50,63 50,100 C50,63 37,50 0,50 C37,50 50,37 50,0 Z" />
  </Svg>
);

export default Star;

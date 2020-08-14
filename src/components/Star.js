/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  animation: ${(p) => p.a} ${(p) => p.s}s linear ${(p) => p.d}s infinite;
  position: absolute;
  height: 100px;
  width: 100px;
  left: ${(props) => props.x}%;
  top: ${(props) => props.y}%;
  fill: white;
  transform: translate3d(-50%, -50%, 0) scale(0);
`;

const Star = ({ x, y, animation, speed = 7, delay = 0 }) => (
  <Svg x={x} y={y} a={animation} s={speed} d={delay} viewBox="0 0 100 100">
    <path d="M50,0 C50,37 63,50 100,50 C63,50 50,63 50,100 C50,63 37,50 0,50 C37,50 50,37 50,0 Z" />
  </Svg>
);

export default Star;

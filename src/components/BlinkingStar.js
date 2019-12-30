import React from 'react';
import styled, { keyframes } from 'styled-components';
import Star from './Star';

const FlyUp = keyframes`
  0%,
  60% {
    transform: translateY(0);
    opacity: 0;
  }

  74% {
    transform: translateY(0);
  }

  90% {
    opacity: 1;
  }

  100% {
    transform: translateY(-300px);
    opacity: 0;
  }
`;

const FlyRight = keyframes`
  0%,
  60% {
    transform: translateX(0);
    opacity: 0;
  }

  74% {
    transform: translateX(0);
  }

  90% {
    opacity: 1;
  }

  100% {
    transform: translateX(300px);
    opacity: 0;
  }
`;

const FlyDown = keyframes`
  0%,
  60% {
    transform: translateY(0);
    opacity: 0;
  }

  74% {
    transform: translateY(0);
  }

  90% {
    opacity: 1;
  }

  100% {
    transform: translateY(300px);
    opacity: 0;
  }
`;

const FlyLeft = keyframes`
  0%,
  60% {
    transform: translateX(0);
    opacity: 0;
  }

  74% {
    transform: translateX(0);
  }

  90% {
    opacity: 1;
  }

  100% {
    transform: translateX(-300px);
    opacity: 0;
  }
`;

const cubicBez = 'cubic-bezier(0.86, 0.4, 1, 1)';

const Top = styled.div`
  position: absolute;
  width: 2px;
  height: 5px;
  background: white;
  opacity: 0;
  top: calc(${(props) => props.y}% - 5px);
  left: calc(${(props) => props.x}% - 1px);
  animation: 7s ${(props) => props.animation} infinite ${cubicBez};
`;

const Bottom = styled.div`
  position: absolute;
  width: 2px;
  height: 5px;
  background: white;
  opacity: 0;
  top: calc(${(props) => props.y}% + 2px);
  left: calc(${(props) => props.x}% - 1px);
  animation: 7s ${(props) => props.animation} infinite ${cubicBez};
`;

const Left = styled.div`
  position: absolute;
  width: 5px;
  height: 2px;
  background: white;
  opacity: 0;
  top: calc(${(props) => props.y}% - 1px);
  left: calc(${(props) => props.x}% - 5px);
  animation: 7s ${(props) => props.animation} infinite ${cubicBez};
`;

const Right = styled.div`
  position: absolute;
  width: 5px;
  height: 2px;
  background: white;
  opacity: 0;
  top: calc(${(props) => props.y}% - 1px);
  left: calc(${(props) => props.x}% + 2px);
  animation: 7s ${(props) => props.animation} infinite ${cubicBez};
`;

// eslint-disable-next-line react/prop-types
const BlinkingStar = ({ x, y }) => (
  <div>
    <Star y={y} x={x} />
    <Left animation={FlyLeft} x={x} y={y} />
    <Right animation={FlyRight} x={x} y={y} />
    <Top animation={FlyUp} x={x} y={y} />
    <Bottom animation={FlyDown} x={x} y={y} />
  </div>
);

export default BlinkingStar;

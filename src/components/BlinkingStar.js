import Star from "components/Star";
import React from "react";
import styled, { keyframes } from "styled-components";

const FlyUp = keyframes`
  0%,
  60% {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }

  74% {
    transform: translate3d(0, 0, 0);
  }

  90% {
    opacity: 1;
  }

  100% {
    transform: translate3d(0, -300px, 0);
    opacity: 0;
  }
`;

const FlyRight = keyframes`
  0%,
  60% {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }

  74% {
    transform: translate3d(0, 0, 0);
  }

  90% {
    opacity: 1;
  }

  100% {
    transform: translate3d(300px, 0, 0);
    opacity: 0;
  }
`;

const FlyDown = keyframes`
  0%,
  60% {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }

  74% {
    transform: translate3d(0, 0, 0);
  }

  90% {
    opacity: 1;
  }

  100% {
    transform: translate3d(0, 300px, 0);
    opacity: 0;
  }
`;

const FlyLeft = keyframes`
  0%,
  60% {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }

  74% {
    transform: translate3d(0, 0, 0);
  }

  90% {
    opacity: 1;
  }

  100% {
    transform: translate3d(-300px, 0, 0);
    opacity: 0;
  }
`;

const Blink = keyframes`
  0%,
  60% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg) scale(0);
  }
  80% {
    transform: translate3d(-50%, -50%, 0) rotate(180deg) scale(0.3);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg) scale(0);
  }
`;

const cubicBez = "cubic-bezier(0.86, 0.4, 1, 1)";

const Top = styled.div`
  position: absolute;
  width: 2px;
  height: 5px;
  background: white;
  opacity: 0;
  top: calc(${(props) => props.y}% - 5px);
  left: calc(${(props) => props.x}% - 1px);
  animation: ${FlyUp} ${(p) => p.speed}s infinite ${cubicBez};
  transform: translate3d(0, 0, 0);
`;

const Bottom = styled.div`
  position: absolute;
  width: 2px;
  height: 5px;
  background: white;
  opacity: 0;
  top: calc(${(props) => props.y}% + 2px);
  left: calc(${(props) => props.x}% - 1px);
  animation: ${FlyDown} ${(p) => p.speed}s infinite ${cubicBez};
  transform: translate3d(0, 0, 0);
`;

const Left = styled.div`
  position: absolute;
  width: 5px;
  height: 2px;
  background: white;
  opacity: 0;
  top: calc(${(props) => props.y}% - 1px);
  left: calc(${(props) => props.x}% - 5px);
  animation: ${FlyLeft} ${(p) => p.speed}s infinite ${cubicBez};
  transform: translate3d(0, 0, 0);
`;

const Right = styled.div`
  position: absolute;
  width: 5px;
  height: 2px;
  background: white;
  opacity: 0;
  top: calc(${(props) => props.y}% - 1px);
  left: calc(${(props) => props.x}% + 2px);
  animation: ${FlyRight} ${(p) => p.speed}s infinite ${cubicBez};
  transform: translate3d(0, 0, 0);
`;

// eslint-disable-next-line react/prop-types
function BlinkingStar({ x, y, speed }) {
  return (
    <div>
      <Star y={y} x={x} animation={Blink} speed={speed} />
      <Left speed={speed} x={x} y={y} />
      <Right speed={speed} x={x} y={y} />
      <Top speed={speed} x={x} y={y} />
      <Bottom speed={speed} x={x} y={y} />
    </div>
  );
}

export default BlinkingStar;

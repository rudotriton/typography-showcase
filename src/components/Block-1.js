import React from "react";
import styled, { keyframes } from "styled-components";

const colors = ["#FFBA00", "#DC0073", "#2176FF", "#04E762", "#F40000"];

const shadowAnimation = keyframes`
  0%,
  9.9% {
    transform: translate3d(0px, 0px, 0);
    z-index:10;
  }

  10%,
  19.9% {
    transform: translate3d(5px, 5px, 0);
    z-index:9;
  }

  20%,
  29.9% {
    transform: translate3d(10px, 10px, 0);
    z-index:8;
  }

  30%,
  39.9% {
    transform: translate3d(15px, 15px, 0);
    z-index:7;
  }
  40%,
  49.9% {
    transform: translate3d(20px, 20px, 0);
    z-index:6;
  }
  50%,
  59.9% {
    transform: translate3d(25px, 25px, 0);
    z-index:5;
  }

  60%,
  69.9% {
    transform: translate3d(30px, 30px, 0);
    z-index:4;
  }
  70%,
  79.9% {
    transform: translate3d(35px, 35px, 0);
    z-index:3;
  }
  80%,
  89.9% {
    transform: translate3d(40px, 40px, 0);
    z-index:2;
  }

  90%,
  100% {
    transform: translate3d(45px, 45px, 0);
    z-index:1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: -20;
  overflow: hidden;
  position: relative;
`;

const Text = styled.span`
  font-size: 10rem;
  font-family: "Parisienne", cursive;
  position: absolute;
  letter-spacing: 10px;
  color: ${(p) => p.color};
  text-shadow: 1px 1px ${(p) => p.color}, 2px 2px ${(p) => p.color},
    3px 3px ${(p) => p.color}, 4px 4px ${(p) => p.color},
    5px 5px ${(p) => p.color};
  animation: ${shadowAnimation} 2s linear ${(p) => p.delay}s infinite;
  transform: translate3d(0, 0, 0);
`;

function BlockOne() {
  return (
    <Wrapper>
      {[...colors, ...colors].map((color, idx) => (
        <Text key={`${idx + color}`} color={color} delay={idx * 0.2}>
          Love
        </Text>
      ))}
    </Wrapper>
  );
}

export default BlockOne;

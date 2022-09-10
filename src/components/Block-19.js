import PropTypes from "prop-types";
import React from "react";
import styled, { keyframes } from "styled-components";

const Appear = (rotation) => keyframes`
  0% {
    transform: translate3d(0,0,0) scale(0) rotate(${rotation}deg);
    opacity: 1;
  }

  90% {
    transform: translate3d(0,0,0) scale(1.2) rotate(calc(${rotation}deg + 360deg));
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate3d(0,0,0) rotate(${rotation}deg);
  }
`;

const Wrapper = styled.div`
  background-color: #000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Text = styled.span`
  font-family: "Pacifico", sans-serif;
  font-size: 10rem;
  text-align: center;
  line-height: 8rem;
  z-index: 10;
  font-weight: 600;
  color: #000;
`;

const leaf = "linear-gradient(180deg, #1C803A 0%, #09FF13 100%)";
const petal = "radial-gradient(50% 50% at 50% 50%, #2540FF 0%, #7015E7 100%);";

const PetalLeaf = styled.div`
  width: 10vw;
  height: 10vw;
  background: ${(p) => (p.petal ? petal : leaf)};
  border-radius: 10vw 0;
  transform: rotate(${(p) => p.rotate}deg)
    translate3d(${(p) => p.tx}vw, ${(p) => p.ty}vw, 0);
  left: 0;
  top: 0;
  position: absolute;
  border: 2px solid #000;
`;

const Center = styled.div`
  width: 5vw;
  height: 5vw;
  background: radial-gradient(50% 50% at 50% 50%, #933bd1 0%, #0e1db4 100%);
  position: absolute;
  transform: translate3d(calc(${(p) => p.tx}vw), calc(${(p) => p.ty}vw), 0)
    translate(-50%, -50%);
  border-radius: 5vw;
  border: 2px solid #000;
  left: 0;
  top: 0;
`;

const FlowerWrapper = styled.div`
  transform-origin: center;
  opacity: 0;
  animation: ${(p) => Appear(p.rotation)} ${(p) => p.speed}s ease-in-out
    ${(p) => p.delay}s infinite;
  transform: translate3d(0, 0, 0);
  position: absolute;
  width: 20vw;
  height: 20vw;
  left: ${(p) => p.x}%;
  top: ${(p) => p.y}%;
`;

function Flower({ delay, x, y, rotation, speed }) {
  return (
    <FlowerWrapper speed={speed} delay={delay} x={x} y={y} rotation={rotation}>
      <PetalLeaf rotate={0} tx={10} ty={0} />
      <PetalLeaf rotate={90} tx={0} ty={0} />
      <PetalLeaf rotate={0} tx={0} ty={10} />
      <PetalLeaf rotate={90} tx={10} ty={-10} />
      <PetalLeaf rotate={45} tx={12} ty={-5} petal />
      <PetalLeaf rotate={45} tx={2} ty={5} petal />
      <PetalLeaf rotate={-45} tx={5} ty={2} petal />
      <PetalLeaf rotate={-45} tx={-5} ty={12} petal />
      <Center tx={10} ty={10} />
    </FlowerWrapper>
  );
}

Flower.propTypes = {
  delay: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  rotation: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
};

function BlockNineteen() {
  const createFlowers = () => {
    const flowers = [];
    for (let i = 0; i <= 15; i += 1) {
      const x = Math.floor(Math.random() * Math.floor(70));
      const y = Math.floor(Math.random() * Math.floor(80));
      const speed = Math.floor(Math.random() * Math.floor(5));
      const rotation = Math.floor(Math.random() * Math.floor(90));
      flowers.push(
        <Flower
          key={i}
          speed={speed + 3}
          delay={i * 0.4}
          x={x + 10}
          y={y}
          rotation={rotation}
        />
      );
    }
    return flowers;
  };

  return (
    <Wrapper>
      {createFlowers()}
      <Text>Grim Fandango</Text>
    </Wrapper>
  );
}

export default BlockNineteen;

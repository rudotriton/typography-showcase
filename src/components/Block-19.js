import React from 'react';
import styled, { keyframes } from 'styled-components';

const Appear = (rotation) => keyframes`
  0% {
    transform: scale(0) rotate(${rotation}deg);
    opacity: 1;
  }

  90% {
    transform: scale(1) rotate(${rotation}deg);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(${rotation}deg);
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
  font-family: 'Pacifico', sans-serif;
  font-size: 10rem;
  text-align: center;
  line-height: 8rem;
  z-index: 10;
  font-weight: 600;
  color: #000;
`;

const leaf = 'linear-gradient(180deg, #1C803A 0%, #09FF13 100%)';
const petal = 'radial-gradient(50% 50% at 50% 50%, #2540FF 0%, #7015E7 100%);';

const PetalLeaf = styled.div`
  width: 10vw;
  height: 10vw;
  background: ${(p) => (p.petal ? petal : leaf)};
  border-radius: 10vw 0;
  transform: rotate(${(p) => p.rotate}deg) translate(${(p) => p.tx}vw, ${(p) => p.ty}vw);
  left: 0;
  top: 0;
  position: absolute;
  border: 2px solid #000;
`;

const Center = styled.div`
  width: 5vw;
  height: 5vw;
  background: radial-gradient(50% 50% at 50% 50%, #933BD1 0%, #0E1DB4 100%);;
  position: absolute;
  transform: translate(${(p) => p.tx}vw, ${(p) => p.ty}vw) translate(-50%, -50%);
  border-radius: 5vw;
  border: 2px solid #000;
  left: 0;
  top: 0;
`;

const FlowerWrapper = styled.div`
  transform-origin: center;
  opacity: 0;
  animation: ${(p) => Appear(p.rotation)} 8s ease-in-out ${(p) => p.delay}s infinite;
  left: ${(p) => p.x}%;
  top: ${(p) => p.y}%;
  position: absolute;
`;

const Flower = ({
  // eslint-disable-next-line react/prop-types
  delay, x, y, rotation,
}) => (
  <FlowerWrapper delay={delay} x={x} y={y} rotation={rotation}>
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

const BlockNineteen = () => {
  const createFlowers = () => {
    const flowers = [];
    for (let i = 0; i <= 25; i += 1) {
      const x = Math.floor(Math.random() * Math.floor(80));
      const y = Math.floor(Math.random() * Math.floor(80));
      const rotation = Math.floor(Math.random() * Math.floor(90));
      flowers.push(
        <Flower key={i} delay={i * 0.4} x={x + 20} y={y} rotation={rotation} />,
      );
    }
    return flowers;
  };

  return (
    <Wrapper>
      {
        createFlowers()
      }
      <Text>Grim Fandango</Text>
    </Wrapper>
  );
};


export default BlockNineteen;

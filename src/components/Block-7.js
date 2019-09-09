import React from 'react';
import styled, { keyframes } from 'styled-components';
import media from '../util/mediaQueries';

const appear = keyframes`
  0%,
  75%,
  100% {
    opacity: 0;
  }

  20%,
  65% {
    opacity: 1;
  }
`;


const wave = keyframes`
  0%,
  50% {
    bottom: -400px;
  }

  25% {
    bottom: 200px;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  background-color: #f2dba4;
  display: flex;
  font-family: 'Inter', sans-serif;
  font-size: 10rem;
  font-weight: 900;
  justify-content: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const Text = styled.span`
  color: #f2dba4;
  letter-spacing: 0.08em;
  text-shadow: 6px 3px 0 rgba(0, 0, 0, 0.6);
  animation: ${appear} 8s linear infinite;
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Waves = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -500px;
  transform: rotate(45deg);
  animation: ${wave} 8s ease-in-out 4s infinite;

  & > div {
    position: absolute;
    opacity: 0.4;
    width: 90vw;
    height: 85vw;
    border-radius: 43%;
    ${media.widelet`
      width: 1600px;
      height: 1600px;
    `}
  }

  & > .one {
    animation: ${rotate} 7000ms infinite linear;
    background: rgba(0, 160, 255, 0.7);
  }

  & > .two {
    animation: ${rotate} 3000ms infinite linear;
    background: rgba(0, 0, 0, 0.2);
  }

  & > .three {
    animation: ${rotate} 7500ms infinite linear;
    background: rgba(119, 218, 255, 0.6);
  }
`;

const BlockOne = () => (
  <Wrapper>
    <Text>Beaches</Text>
    <Waves>
      <div className="one" />
      <div className="two" />
      <div className="three" />
    </Waves>
  </Wrapper>
);

BlockOne.defaultProps = {};

BlockOne.propTypes = {};

export default BlockOne;

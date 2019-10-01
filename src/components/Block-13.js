import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Horizon = styled.div`
  background:
    linear-gradient(
      180deg,
      #fe5f75 0%,
      #fc9842 50%,
      #0064ad 50.01%,
      #000b72 100%
    );
  height: 100%;
  width: 100%;
  transform: rotate(180deg);
`;

const SunMoon = styled.div`
  background: linear-gradient(0deg, #FF9A15 9.17%, #FF7715 22.89%, #F41D1D 50%, #FFFDEA 50.01%);
  height: 20rem;
  width: 20rem;
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 10rem;
  transform: translate(-50%, -50%);
`;

const Sea = styled.div`
  position: absolute;
  height: 50%;
  width: 100%;
  top: 50%;
  background: #e5326a;
`;

const Text = styled.span`
  font-family: 'Chela One', sans-serif;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 10rem;
  color: white;
  z-index: 10;
`;

const BlockTwelve = () => (
  <Wrapper>
    <Horizon />
    <Text>Change</Text>
    <SunMoon />
    <Sea />
  </Wrapper>
);

BlockTwelve.defaultProps = {};

BlockTwelve.propTypes = {};

export default BlockTwelve;

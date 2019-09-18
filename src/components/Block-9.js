import React from 'react';
import styled, { keyframes } from 'styled-components';

const scan = keyframes`
  0%,
  5%,
  95%,
  100% {
    left: 20%;
    width: 0;
  }

  10%,
  90% {
    left: 15%;
    width: 100px;
  }

  23%,
  60%,
  72% {
    left: 80%;
  }

  44%,
  65%,
  80% {
    left: 35%;
  }

  50%,
  70% {
    left: 75%;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: #000;
`;

const Text = styled.span`
  font-family: 'Anton', sans-serif;
  color: #000;
  font-size: 10rem;
  text-shadow:
    -1px -1px #fff,
    1px -1px #fff,
    1px 1px #fff,
    -1px 1px #fff,
    0 1rem #fff;
  text-transform: uppercase;
`;

const Overlay = styled.div`
  position: absolute;
  background-color: white;
  left: 50%;
  top: 0;
  width: 100px;
  height: 100%;
  mix-blend-mode: difference;
  animation: ${scan} 5s linear infinite;
`;

const BlockOne = () => (
  <Wrapper>
    <Text style={{
      marginBottom: '-1.35rem',
      letterSpacing: '-0.04em',
    }}
    >
      My Strange
    </Text>
    <Text style={{
      marginTop: '-1.35rem',
      marginLeft: '1.1rem',
      letterSpacing: '0.066em',
    }}
    >
      Addiction
    </Text>
    <Overlay />
  </Wrapper>
);

BlockOne.defaultProps = {};

BlockOne.propTypes = {};

export default BlockOne;

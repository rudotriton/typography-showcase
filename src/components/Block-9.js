import React from 'react';
import styled, { keyframes } from 'styled-components';

const scan = keyframes`
  0%,
  100% {
    clip-path: polygon(20% 0, 20% 0, 20% 100%, 20% 100%);
  }

  10%,
  95% {
    clip-path: polygon(15% 0, 25% 0, 25% 100%, 15% 100%);
  }

  23%,
  60%,
  72% {
    clip-path: polygon(80% 0, 90% 0, 90% 100%, 80% 100%);
  }

  44%,
  65%,
  80% {
    clip-path: polygon(35% 0, 45% 0, 45% 100%, 35% 100%);
  }

  50%,
  70% {
    clip-path: polygon(75% 0, 85% 0, 85% 100%, 75% 100%);
  }
`;

const One = styled.div`
  position: absolute;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: #000;
`;

const Two = styled.div`
  position: absolute;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: #fff;
  animation: ${scan} 5s linear infinite;
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

const Text2 = styled.span`
  font-family: 'Anton', sans-serif;
  color: #fff;
  font-size: 10rem;
  text-shadow:
    -1px -1px #000,
    1px -1px #000,
    1px 1px #000,
    -1px 1px #000,
    0 1rem #000;
  text-transform: uppercase;
`;

const BlockOne = () => (
  <div style={{ position: 'relative' }}>
    <One>
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
    </One>
    <Two>
      <Text2 style={{
        marginBottom: '-1.35rem',
        letterSpacing: '-0.04em',
      }}
      >
      My Strange
      </Text2>
      <Text2 style={{
        marginTop: '-1.35rem',
        marginLeft: '1.1rem',
        letterSpacing: '0.066em',
      }}
      >
      Addiction
      </Text2>
    </Two>
  </div>
);

BlockOne.defaultProps = {};

BlockOne.propTypes = {};

export default BlockOne;

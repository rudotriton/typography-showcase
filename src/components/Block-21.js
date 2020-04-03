import React from 'react';
import styled, { keyframes } from 'styled-components';
import media from '../util/mediaQueries';

const rotate = keyframes`
  from {
    -webkit-transform:
      rotate3D(1, 0, 0, 70deg)
      rotate3D(0, 0, 1, 0deg);
    transform:
      rotate3D(1, 0, 0, 70deg)
      rotate3D(0, 0, 1, 0deg);
  }

  to {
    -webkit-transform:
      rotate3D(1, 0, 0, 70deg)
      rotate3D(0, 0, 1, 360deg);
    transform:
      rotate3D(1, 0, 0, 70deg)
      rotate3D(0, 0, 1, 360deg);
  }
`;

const Vinyl = styled.div`
  /* transform:  */
  animation: ${rotate} 8s infinite linear;
`;

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
    /* transform: rotateX(70deg); */
  & svg {
    width: 12rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    & path {
      fill: transparent;
    }
    & textPath {
      fill: white;
      font-size: 1.6rem;
    }
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(180deg, transparent 0%, transparent 20%, #FFFFFF 24%, transparent 28%, transparent 100%);
    transform: rotate(45deg);
  }
`;

const Disc = styled.div`
  width: 40rem;
  height: 40rem;
  background: #111;
  border-radius: 100rem;
  &::before {
    content: "";
    border-radius: 100rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 14rem;
    height: 14rem;
    background: radial-gradient(50% 50% at 50% 50%, #FEA701 0%, #F7310E 100%);
  }
  &::after {
    content: "";
    border-radius: 100rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1.5rem;
    height: 1.5rem;
    background-color: #f6f7dd;
  }
  ${media.widelet`
    width: 50rem;
    height: 50rem;
  `}
`;

const Twenty = () => (
  <Wrapper>
    <Vinyl>
      <Disc />
      <svg viewBox="0 0 100 100">
        <path id="curve" d="M89.5 50C89.5 71.8152 71.8152 89.5 50 89.5C28.1848 89.5 10.5 71.8152 10.5 50C10.5 28.1881 28.1881 10.5 50 10.5C71.8119 10.5 89.5 28.1881 89.5 50Z" />
        <text width="500">
          <textPath xlinkHref="#curve">
        Lay All Your Love On Me
          </textPath>
        </text>
      </svg>
    </Vinyl>
  </Wrapper>
);

export default Twenty;

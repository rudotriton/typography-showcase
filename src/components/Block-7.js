import React from 'react';
import styled, { keyframes } from 'styled-components';

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
`;

const Text = styled.span`
  color: #f2dba4;
  letter-spacing: 0.08em;
  text-shadow: 6px 3px 0 rgba(0, 0, 0, 0.6);
`;

const BlockOne = () => (
  <Wrapper>
    <Text>Beach</Text>
  </Wrapper>
);

BlockOne.defaultProps = {};

BlockOne.propTypes = {};

export default BlockOne;

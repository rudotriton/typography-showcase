import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './style';
import BlockOne from './components/Block-1';
import BlockTwo from './components/Block-2';
import BlockThree from './components/Block-3';
import BlockFour from './components/Block-4';
import BlockFive from './components/Block-5';
import 'normalize.css';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const root = (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Wrapper>
        <BlockOne />
        <BlockTwo />
        <BlockThree />
        <BlockFour />
        <BlockFive />
      </Wrapper>
    </>
  </ThemeProvider>
);

ReactDOM.render(root, document.getElementById('root'));

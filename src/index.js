import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './style';
import BlockOne from './components/Block-1';
import BlockTwo from './components/Block-2';
import BlockThree from './components/Block-3';
import BlockFour from './components/Block-4';
import BlockFive from './components/Block-5';
import BlockSix from './components/Block-6';
import BlockSeven from './components/Block-7';
import BlockEight from './components/Block-8';
import BlockNine from './components/Block-9';
import 'normalize.css';
import media from './util/mediaQueries';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-auto-rows: 40rem;
  ${media.widelet`
    grid-template-columns: 100%;
  `}
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
        <BlockSix />
        <BlockSeven />
        <BlockEight />
        <BlockNine />
      </Wrapper>
    </>
  </ThemeProvider>
);

ReactDOM.render(root, document.getElementById('root'));

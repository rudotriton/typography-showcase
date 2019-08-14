import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './style';
import { BlockOne } from './Block-1';
import BlockTwo from './Block-2';
import BlockThree from './Block-3';
import BlockFour from './Block-4';
import 'normalize.css';

const root = (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <BlockOne />
      <BlockTwo />
      <BlockThree />
      <BlockFour />
    </>
  </ThemeProvider>
);

ReactDOM.render(root, document.getElementById('root'));

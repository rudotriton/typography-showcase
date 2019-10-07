import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './style';
import 'normalize.css';
import AppRouter from './router/AppRouter';

const root = (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  </ThemeProvider>
);

ReactDOM.render(root, document.getElementById('root'));

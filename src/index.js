import { createRoot } from "react-dom/client";
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './style';
import AppRouter from './router/AppRouter';

const jsx = (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  </ThemeProvider>
);

const root = createRoot(document.getElementById("root"));
root.render(jsx);

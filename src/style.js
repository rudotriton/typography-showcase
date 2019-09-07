import { createGlobalStyle } from 'styled-components';
import media from './util/mediaQueries';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    ${media.tablet`
      font-size: 56.25%;
    `}
    ${media.phone`
      font-size: 45%;
    `}
  }

  body {
    background-color: #000;
    font-family: sans-serif;

    /* &::-webkit-scrollbar {
      width: 0;
    } */
  }
`;

export const theme = {
  black: '#111',
  white: '#fefefe',
};

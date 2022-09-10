import { createGlobalStyle } from 'styled-components';
import media from './util/mediaQueries';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    ${media.desktop`
      font-size: 50%;
    `}
    ${media.widelet`
      font-size: 56%;
    `}
    ${media.phone`
      font-size: 45%;
    `}
  }

  body {
    background-color: #000;
    font-family: sans-serif;
    margin: 0;

    *, *:before, *:after {
      box-sizing: border-box;
    }

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export const theme = {
  black: '#000',
  white: '#ffff',
};

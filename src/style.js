import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;

    @media only screen and (max-width: ${props => props.theme.bpMedium}) {
      font-size: 56.25%;
    }

    @media only screen and (max-width: ${props => props.theme.bpSmall}) {
      font-size: 32%;
    }
  }

  body {
    background-color: #000;
    font-family: sans-serif;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export const theme = {
  black: '#111',
  white: '#fefefe',
  bpMedium: '768px',
  bpSmall: '500px',
};

import { createGlobalStyle } from 'styled-components';

export const theme = {
  primary: '#feeeda',
  secondary: '#feeeda',
  background: '#1f1e27',
  red: '#ad251b',
  black: '#262626',
  lightGrey: '#d8d8d8',
  myCard: 'deeppink',
  playerCard: 'purple',
  centerCard: 'darkcyan',
  selectedCard: '#feeeda',
};

const GlobalStyles = createGlobalStyle`
  html {
      font-family: 'Roboto', sans-serif;
      font-weight: normal;
      font-style: normal;
      box-sizing: border-box;
      font-size: 10px;
      background: ${({ theme }) => theme.background};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    line-height: 2;
  }
  h1,h2,h3,p {
    color: ${({ theme }) => theme.primary};
    margin: 0;
    line-height: 1.4;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.secondary};;
    margin: 0;
  }
`;
export default GlobalStyles;

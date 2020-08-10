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
      font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
      font-weight: normal;
      font-style: normal;
      box-sizing: border-box;
      background: ${({ theme }) => theme.background};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
  }
  h1,h2,h3,p {
    color: ${({ theme }) => theme.primary};
    margin: 0;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.secondary};;
    margin: 0;
  }
  li {
    list-style: none;
    font-size: 1.1rem;
  }
`;
export default GlobalStyles;

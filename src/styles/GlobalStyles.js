import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #fff;
    margin: 0;
    padding: 0;
    transition: all 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #fff;
  }
`;
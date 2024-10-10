// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #1e1e1e;
    color: #ffffff; 
    font-family: 'Poppins', sans-serif;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

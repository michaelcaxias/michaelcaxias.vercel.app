import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    scroll-behavior: smooth;
    text-decoration: none;
    margin: 0;
  }
  
  body {
    font-family: 'Heebo', 'sans-serif';
  }
`;

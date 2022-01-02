import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    text-decoration: none;
    margin: 0;
  }
  
  body {
    font-family: 'Heebo', 'sans-serif';
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.color.background}; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.color.primary}; 
    border-radius: 10px;
  }
  ul {
    list-style: none;
  }
`;

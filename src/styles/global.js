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
`;

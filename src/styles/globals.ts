import { createGlobalStyle } from 'styled-components';
import Theme from './theme.interfaces';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    text-decoration: none;
    margin: 0;
  }

  body, html {
    font-family: 'Heebo', 'sans-serif';
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props: Theme) => props.theme.color.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props: Theme) => props.theme.color.primary};
    border-radius: 10px;
  }
  ul {
    list-style: none;
  }
`;

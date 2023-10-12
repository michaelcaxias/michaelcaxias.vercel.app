import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  html, body {
    height: auto;
    min-height: 100%;
    overflow-x: hidden;
    background: #fff;
    color: #555;
    overflow: hidden;
  }

  body, input, textarea {
    font-family: Montserrat, sans-serif;
  }

  *, a, button, div {

    &:focus-visible {
      outline: 3px solid #cdd5f2;
    }
  }

  @media only screen and (max-width: 1440px) {

    html {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;

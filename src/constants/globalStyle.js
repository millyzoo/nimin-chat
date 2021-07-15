import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Noto Sans TC', Open-Sans, Arial;
    font-weight: 400;
    background: #e9e9e9;
    color: #505050;
    transition: all 0.5s linear;
  }

  * {
    box-sizing: border-box;
  }

  h1, p {
    margin: 0;
  }

  input,
  input[type="button"],
  input[type="submit"],
  input[type="file"],
  input[type="reset"],
  button,
  textarea,
  select {
    outline: none;
    letter-spacing: 1px;
    appearance: none;
    outline-style: none;
    -webkit-appearance: none;
  }

  input, textarea {
    resize: none;
  }
`;

export default GlobalStyle;

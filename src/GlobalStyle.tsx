import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  /* Reset css */

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box;
    height: 0; 
    overflow: visible; 
  }

  pre {
    font-family: monospace, monospace; 
    font-size: 1em; 
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none; 
    text-decoration: underline; 
    text-decoration: underline dotted; 
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace; 
    font-size: 1em; 
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }


  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
  }

  button,
  input { 
    overflow: visible;
  }

  button,
  select { 
    text-transform: none;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box; 
    color: inherit; 
    display: table; 
    max-width: 100%; 
    padding: 0;
    white-space: normal; 
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px; 
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  a {
    text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }

  html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, a, em, img, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, article, footer, header, nav, section, main {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  h1, h2, h3, h4, h5, h6, p, a, ul {
    font-size: 1em;
    font-weight: normal;
  }

  /* Estilos gerais */

  html {
    padding: 70px 0px;
    scroll-behavior: smooth;
  }

  * {
    font-family: Inter;
    font-weight: 500;
    color: #000;
  }

  h1 {
    font-size: 40px;
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 30px;
    }
  }

  h2 {
    font-size: 30px;
    @media (max-width: 768px) {
      font-size: 25px;
    }
    @media (max-width: 480px) {
      font-size: 25px;
    }
  }

  p, legend{
    font-size: 25px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  label {
    font-size: 20px;
    @media (max-width: 768px) {
      font-size: 15px;
    }
    @media (max-width: 480px) {
      font-size: 15px;
    }
  }

  span {
    font-size: 20px;
    color: #05399E;
    @media (max-width: 768px)  {
      font-size: 15px;
    }
    @media (max-width: 480px) {
      font-size: 15px;
    }
  }

  button {
    cursor: pointer;
    font-weight: 600;
    letter-spacing: .3px;
    color: #fff;
    background: #07732B;
    border-radius: 10px;
    border: none;
    max-width: 150px;
    max-height: 50px;
    padding: 15px;
    transition: 0.3s;
    &:hover {
      box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, .3);
      background: rgb(9, 134, 50);
    }
    &:disabled {
      background: #7F7F7F;
      cursor: not-allowed;
      &:hover {
        background: #6a6a6a;
        box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, .3);
      }
    }
  }

  .svgTitle {
    display: flex;
    align-items: center;
    svg {
      margin-right: 30px;
    }
  }
`;

export default GlobalStyle;

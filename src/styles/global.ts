import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --red-100: #e52e4d1a;
    --red-200: #e52e4d;

    --purple-300: #5429cc;
    --purple-100: #6933ff;

    --green-100: #12A4541a;
    --green-200: #33CC95;
    --green-400: #365f5f;

    --gray-100: #f0f2f5;
    --gray-150: #E7E9EE;
    --gray-200: #D7D7D7;
    --gray-300: #969cb3;
    --gray-500: #363F5F;

    --white: #fff;

    --box-shadow-100: 0px 0px 29px -1px rgba(105,105,105,0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--gray-100);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  } 

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
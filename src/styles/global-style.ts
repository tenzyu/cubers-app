import { createGlobalStyle } from "styled-components";
import { normalize } from "styles/normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  :root {
    --bg-color: #f6f6f6;
    --bg-color-dark: #e5e5e5;

    --body-font: "Helvetica Neue", "Arial", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "sans-serif";

    --border-color: #ccc;

    --font-bold: 700;
    --font-medium: 500;
    --font-semi-bold: 600;
    --font-sharp: 300;

    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1rem;

    --mb-1: .5rem;
    --mb-2: 1rem;
    --mb-3: 1.5rem;
    --mb-4: 2rem;
    --mb-5: 2.5rem;

    --normal-font-size: .938rem;
    --small-font-size: .813rem;
    --smaller-font-size: .75rem;

    --text-color: #333;
    --text-color-light: #293348;

    --z-fixed: 100;
  }

  @media screen and (min-width: 768px) {
    :root {
      --h1-font-size: 2.25rem;
      --h2-font-size: 1.5rem;
      --h3-font-size: 1.25rem;
      --normal-font-size: 1rem;
      --small-font-size: .875rem;
      --smaller-font-size: .813rem;
    }
  }

  *, ::before, ::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }

  h2, h3, h4 {
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
  }

  img {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }

  a, button {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    /* no highlighting */
  }

  button {
    border: none;
    cursor: pointer;
    outline: none;
    text-align: left;
    width: 100%;
  }
`;
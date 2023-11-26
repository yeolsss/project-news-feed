import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  // reset css
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  div,
  section,
  footer,
  header,
  article,
  aside,
  nav {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    border: none;
    background-color: none;
  }

  /* typography */
  html {
    font-size: 62.5%;
  }

  :root {
    // 기본 색상 설정
    --primaryColor: ${({ theme }) => theme.primaryColor};
    --secondaryColor: ${({ theme }) => theme.secondaryColor};
    --accentColor: ${({ theme }) => theme.accentColor};
    --textColor: ${({ theme }) => theme.textColor};
    --backgroundColor1: ${({ theme }) => theme.backgroundColor1};
    --backgroundColor2: ${({ theme }) => theme.backgroundColor2};
    --backgroundColor3: ${({ theme }) => theme.backgroundColor3};
  }

  body {
    width: 100vw;
    background-color: var(--backgroundColor1);
    color: var(--textColor);
    transition:
      background-color 0.3s ease-in,
      color 0.3s ease-in;
    position: relative;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  #root {
    width: 100%;
    height: 100vh;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

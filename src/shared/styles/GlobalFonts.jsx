import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const GlobalFonts = styled.createGlobalStyle`
  @font-face {
    font-family: "IBM Plex Sans KR", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300;400;700&display=swap");
  }
  @font-face {
    font-family: "IBM Plex Sans", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300;400;700&display=swap");
  }
  @font-face {
    font-family: "D2Coding";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/D2Coding.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

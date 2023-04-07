import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: 'NeoDunggeunmoPro-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/NeoDunggeunmoPro-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  body {
    font-family: 'NeoDunggeunmoPro-Regular', sans-serif;
    white-space: pre-wrap;
    text-align: center;
  }

  ul, ol {
    list-style: none;
    padding-left: 0px;
  }
`;

export default GlobalStyle;

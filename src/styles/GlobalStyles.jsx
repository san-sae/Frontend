import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html, #root {
    height: 100%;
    width: 100%;
    background-color: #ccc; /* 회색 바탕 */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyles;

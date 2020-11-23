// globalStyles.js
import { createGlobalStyle } from "styled-components";

// Load Nunito typeface
require("typeface-nunito");

const GlobalStyle = createGlobalStyle`
html, body, div, ul, li, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font-family: 'Nunito', sans-serif;
  vertical-align: baseline;
}
*, *::after, *::before {
  box-sizing: border-box;
}
ol, ul {
	list-style: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

img {
  width:  100%;
  height: 100%;
}

/* #root {
  width: 100%;
  height: 100%;
  margin: 0 auto;
	max-width: 1280px;
} */

`;

export default GlobalStyle;

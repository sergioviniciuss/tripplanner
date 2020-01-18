import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

 * {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
}

html, body, #root {
    height: 100%;
}

#root {
  padding: 0 20px;
}

body {
  color: rgb(25, 28, 31);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased !important;
  background: rgb(243, 244, 245);
}

.is-hidden {
  display: none;
}

ul {
    list-style-type:none;
}

`;
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
  display:flex;
  width: 100%;
  justify-content: center;
}

body {
  color: rgb(25, 28, 31);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased !important;
  background: rgb(243, 244, 245);
}

.wrapper {
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
}

.is-hidden {
  display: none;
}

ul {
    list-style-type:none;
}


`;

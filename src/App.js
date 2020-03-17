import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Button from "./components/Button";

const App = () => {
  return (
    <div className="wrapper">
      <GlobalStyle />
      <Header />
      <Button>Login</Button>
    </div>
  );
};

export default App;

import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="wrapper">
      <GlobalStyle />
      <Header />
    </div>
  );
};

export default App;

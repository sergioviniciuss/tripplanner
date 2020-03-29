import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Login from "./Pages/Login";
import Destination from "./Pages/Destination";

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="destination" element={<Destination />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "Routes";
import { createGlobalStyle } from "styled-components";
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
body{
  background:#f3f3f3;
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
body {
    font-family: 'Open Sans', Arial, sans-serif; 
    background-color: #ffffff;
    padding: 0;
    margin: 0;
    height: 100%;
  }

  a{
      color: black;
  }
  * {
  box-sizing: border-box;
  }
`;
ReactDOM.render(
  <div>
    <GlobalStyles />
    <App />
  </div>,
  document.getElementById("root")
);

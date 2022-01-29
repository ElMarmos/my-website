import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import theme from "./constants/theme";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./assets/styles/index.css";
import ApproachRegularOTF from "./assets/fonts/Approach/Approach-Regular.otf";
import ApproachBoldOTF from "./assets/fonts/Approach/Approach-Bold.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Approach";
    src: url(${ApproachRegularOTF});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Approach";
    src: url(${ApproachBoldOTF});
    font-weight: bold;
    font-style: normal;
  }

  html {
    height: 100%;
    scroll-behavior: smooth;


    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.primary};
      border-radius: 2px;
    }
  }

  body {
    margin: 0;
    background-color: ${(props) => props.theme.primaryBackground};
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

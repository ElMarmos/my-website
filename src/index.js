import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import ReactGA from "react-ga";
import theme from "./constants/theme";
import { ThemeProvider } from "styled-components";

ReactGA.initialize("G-Z7TXXF4WYK");

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

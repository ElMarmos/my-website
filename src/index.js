import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import theme from "./constants/theme";
import { ThemeProvider } from "styled-components";


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

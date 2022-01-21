import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import ReactGA from "react-ga";

ReactGA.initialize("G-Z7TXXF4WYK");

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

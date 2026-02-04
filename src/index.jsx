import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import ApproachBoldOTF from "./assets/fonts/Approach/Approach-Bold.otf";
import ApproachRegularOTF from "./assets/fonts/Approach/Approach-Regular.otf";
import Navbar from "./components/Navbar";
import data from "./data/data.json";
import theme from "./data/theme.json";
import Home from "./pages/Home";

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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar items={data.navbar.items} />
      <Home data={data} />
    </ThemeProvider>
  </StrictMode>,
);

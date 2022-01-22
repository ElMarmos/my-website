import styled from "styled-components";
import "../assets/styles/index.css";
import Header from "../components/Header";
import ReactGA from "react-ga";
import data from "../constants/data";
import { useEffect } from "react";

const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  color: white;
`;

function Home() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize("G-Z7TXXF4WYK", {
        debug: true,
      });
      window.GA_INITIALIZED = true;
    }

    ReactGA.pageview("/", null, "Page visit");
  }, []);

  
  return (
    <HomeContainer>
      <Header data={data.header}></Header>
    </HomeContainer>
  );
}

export default Home;

import styled from "styled-components";
import "../assets/styles/index.css";
import Header from "../components/Header";

import data from "../constants/data";

const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  color: white;
`;

function Home() {
  return (
    <HomeContainer>
      <Header data={data.header}></Header>
    </HomeContainer>
  );
}

export default Home;

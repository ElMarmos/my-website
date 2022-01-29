import ReactGA from "react-ga4";
import styled from "styled-components";
import Header from "../components/Header";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience/Experience";
import data from "../constants/data";
import { useEffect } from "react";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";

const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  color: white;
  font-family: "Approach";
`;

const Home = () => {
  useEffect(() => {
    ReactGA.initialize("G-Z7TXXF4WYK");
  }, []);
  return (
    <HomeContainer>
      <Header data={data.header} links={data.general.links} />
      {data.navbar.items.map((section, idx) => {
        if (section === "About") {
          return <About key={section.toLowerCase()} data={data.about} />;
        } else if (section === "Education") {
          return (
            <Education
              key={section.toLowerCase()}
              items={data.education.items}
              number={idx + 1}
              sectionTitle={section}
            />
          );
        } else if (section === "Experience") {
          return (
            <Experience
              key={section.toLowerCase()}
              items={data.experience.items}
              number={idx + 1}
              sectionTitle={section}
            />
          );
        } else if (section === "Skills") {
          return (
            <Skills
              key={section.toLowerCase()}
              items={data.skills.items}
              number={idx + 1}
              sectionTitle={section}
            />
          );
        } else if (section === "Portfolio") {
          return (
            <Portfolio
              key={section.toLowerCase()}
              items={data.portfolio.items}
              number={idx + 1}
              sectionTitle={section}
            />
          );
        } else if (section === "Contact") {
          return (
            <Contact
              key={section.toLowerCase()}
              data={data.contact}
              links={data.general.links}
              number={idx + 1}
              sectionTitle={section}
            />
          );
        }

        return null;
      })}
    </HomeContainer>
  );
};

export default Home;

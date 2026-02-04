import styled from "styled-components";
import About from "../components/About";
import Contact from "../components/Contact/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience/Experience";
import Header from "../components/Header";
import Skills from "../components/Skills";

const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  color: white;
  font-family: "Approach";
`;

const Home = ({ data }) => {
  return (
    <HomeContainer>
      <Header
        data={data.header}
        links={data.general.links}
        navbarItems={data.navbar.items}
      />
      {data.navbar.items.map((section, idx) => {
        if (section === "About") {
          return (
            <About key={section.toLowerCase()} id={section} data={data.about} />
          );
        } else if (section === "Education") {
          return (
            <Education
              key={section.toLowerCase()}
              id={section}
              items={data.education.items}
              number={idx + 1}
              sectionTitle={section}
            />
          );
        } else if (section === "Experience") {
          return (
            <Experience
              key={section.toLowerCase()}
              id={section}
              items={data.experience.items}
              number={idx + 1}
              sectionTitle={section}
            />
          );
        } else if (section === "Skills") {
          return (
            <Skills
              key={section.toLowerCase()}
              id={section}
              items={data.skills.items}
              number={idx + 1}
              sectionTitle={section}
            />
          );
        } else if (section === "Contact") {
          return (
            <Contact
              key={section.toLowerCase()}
              id={section}
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

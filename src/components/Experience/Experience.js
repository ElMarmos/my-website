import { useState } from "react";
import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import ExperienceItem from "./ExperienceItem";
import experienceDecoration from "../../assets/images/experience_decoration.svg";

const ExperienceContainer = styled.section`
  position: relative;
  padding: 48px 0;

  @media screen and (min-width: 426px) {
    padding: 72px 0;
  }

  @media screen and (min-width: 992px) {
    padding: 80px 0;
  }
`;

const ResponsiveContainer = styled.div`
  position: relative;
  padding: 0 16px;

  @media screen and (min-width: 426px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 992px) {
    padding: 0 119px;
  }
`;

const ResponsiveContainerMod = styled(ResponsiveContainer)`
  @media screen and (min-width: 992px) {
    margin: 0 auto;
    max-width: 1366px;
  }
`;

const ExperienceItemsContainerParent = styled.div`
  margin: 0 auto;
  max-width: 1366px;
`;

const ExperienceItemsContainer = styled.div`
  @media screen and (min-width: 680px) {
    margin-left: 14%;
  }

  @media screen and (min-width: 992px) {
    margin-left: auto;
    max-width: 744px;
  }
`;
const ExperienceDecorationImg = styled.img`
  position: absolute;
  left: 0;
  height: 466px;
  top: 50%;
  transform: translate(-288px, -50%);
  display: none;

  @media screen and (min-width: 1200px) {
    display: block;
  }
`;

const NewSectionTitle = styled(SectionTitle)`
  margin-bottom: 64px;

  @media screen and (min-width: 426px) {
    margin-bottom: 104px;
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 120px;
  }
`;

const Experience = ({ items, number, sectionTitle, ...rest }) => {
  const [open, setOpen] = useState(0);

  return (
    <ExperienceContainer {...rest}>
      <ResponsiveContainerMod>
        <NewSectionTitle number={number} title={sectionTitle} />
      </ResponsiveContainerMod>
      <ResponsiveContainer>
        <ExperienceDecorationImg src={experienceDecoration} alt="" />
        <ExperienceItemsContainerParent>
          <ExperienceItemsContainer>
            {items.map((data, idx) => (
              <ExperienceItem
                {...data}
                index={idx}
                open={idx === open}
                setOpen={setOpen}
                key={idx}
              />
            ))}
          </ExperienceItemsContainer>
        </ExperienceItemsContainerParent>
      </ResponsiveContainer>
    </ExperienceContainer>
  );
};

export default Experience;

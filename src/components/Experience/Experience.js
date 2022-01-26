import { useState } from "react";
import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import ExperienceItem from "./ExperienceItem";

const ExperienceContainer = styled.section`
  padding: 48px 16px;

  @media screen and (min-width: 426px) {
    padding: 72px 40px;
  }
`;

const ExperienceItemsContainer = styled.div`
  @media screen and (min-width: 680px) {
    margin-left: 14%;
  }
`;

const NewSectionTitle = styled(SectionTitle)`
  margin-bottom: 64px;

  @media screen and (min-width: 426px) {
    margin-bottom: 104px;
  }
`;

const Experience = ({ items, number, sectionTitle }) => {
  const [open, setOpen] = useState(0);

  return (
    <ExperienceContainer>
      <NewSectionTitle number={number} title={sectionTitle} />
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
    </ExperienceContainer>
  );
};

export default Experience;

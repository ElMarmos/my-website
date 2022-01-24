import { useState } from "react";
import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import ExperienceItem from "./ExperienceItem";

const ExperienceContainer = styled.section`
  padding: 48px 16px;
`;

const NewSectionTitle = styled(SectionTitle)`
  margin-bottom: 64px;
`;

const Experience = ({ items, number, sectionTitle }) => {
  const [open, setOpen] = useState(0);

  return (
    <ExperienceContainer>
      <NewSectionTitle number={number} title={sectionTitle} />
      <div>
        {items.map((data, idx) => (
          <ExperienceItem
            {...data}
            index={idx}
            open={idx === open}
            setOpen={setOpen}
            key={idx}
          />
        ))}
      </div>
    </ExperienceContainer>
  );
};

export default Experience;

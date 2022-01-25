import WebDevelopmentIcon from "../../assets/images/skill_web_devolopment.svg";
import FrontEndDevelopmentIcon from "../../assets/images/skill_front_end_development.svg";
import OtherTechnologiesIcon from "../../assets/images/skill_other_technologies.svg";
import DesignIcon from "../../assets/images/skill_design.svg";
import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";

const SkillsContainer = styled.section`
  padding: 48px 0;
`;

const NewSectionTitle = styled(SectionTitle)`
  margin-bottom: 64px;
`;

const SkillItemsContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-row-gap: 56px;
  justify-items: center;
`;

const SkillItem = styled.div`
  font-family: "Fira Code", monospace;
  text-align: center;
  max-width: 264px;
`;

const SkillImage = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 24px;
`;

const SkillTitle = styled.h3`
  color: ${(props) => props.theme.secondary};
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  margin-top: 0;
  margin-bottom: 16px;
`;

const SkillBody = styled.p`
  color: white;
  font-size: 14px;
  line-height: 24px;
  margin: 0;
`;

const renderImage = (number) => {
  switch (number) {
    case 0:
      return <SkillImage src={WebDevelopmentIcon} />;
    case 1:
      return <SkillImage src={FrontEndDevelopmentIcon} />;
    case 2:
      return <SkillImage src={OtherTechnologiesIcon} />;
    case 3:
      return <SkillImage src={DesignIcon} />;
    default:
      return <SkillImage src={WebDevelopmentIcon} />;
  }
};

const Skills = ({ number, sectionTitle, items }) => {
  return (
    <SkillsContainer>
      <NewSectionTitle number={number} title={sectionTitle} />
      <SkillItemsContainer>
        {items.map(({ title, body }, idx) => (
          <SkillItem key={idx}>
            {renderImage(idx)}
            <SkillTitle>{title}</SkillTitle>
            <SkillBody>{body}</SkillBody>
          </SkillItem>
        ))}
      </SkillItemsContainer>
    </SkillsContainer>
  );
};

export default Skills;
import styled from "styled-components";
import CaretIcon from "../../assets/images/caret.svg";

const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Caret = styled.img`
  height: 8px;
  margin-bottom: 8px;
`;

const Number = styled.p`
  color: ${(props) => props.theme.colors.lightGray};
  font-family: "Fira Code", monospace;
  font-weight: bold;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 8px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.primary};
  font-family: "Fira Code", monospace;
  font-weight: bold;
  font-size: 28px;
  margin: 0;
  line-height: 36px;
`;

const SectionTitle = ({ className, number, title }) => {
  return (
    <SectionTitleContainer className={className}>
      <Caret src={CaretIcon} />
      <Number>0{number}.</Number>
      <Title>{title}_</Title>
    </SectionTitleContainer>
  );
};

export default SectionTitle;

import styled from "styled-components";
import CaretIcon from "../../assets/images/caret.svg";

const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 426px) {
    flex-direction: row;
  }
`;

const Caret = styled.img`
  height: 8px;
  margin-bottom: 8px;

  @media screen and (min-width: 426px) {
    transform: rotate(-90deg);
    margin-bottom: 0;
    margin-right: 5px;
  }
`;

const Number = styled.p`
  color: ${(props) => props.theme.colors.lightGray};
  font-family: "Fira Code", monospace;
  font-weight: bold;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 8px;

  @media screen and (min-width: 426px) {
    margin-bottom: 0;
    margin-right: 8px;
    font-size: 16px;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.primary};
  font-family: "Fira Code", monospace;
  font-weight: bold;
  font-size: 28px;
  margin: 0;
  line-height: 36px;

  @media screen and (min-width: 426px) {
    font-size: 36px;
    line-height: 40px;
  }
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

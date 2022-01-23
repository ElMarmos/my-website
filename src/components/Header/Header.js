import styled from "styled-components";
import ArrowDown from "../../assets/images/arrow_down.svg";
import ButtonLink from "./ButtonLink";

const HeaderContainer = styled.section`
  background-color: ${(props) => props.theme.secondaryBackground};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const HeaderText = styled.h1`
  font-size: 28px;
  font-weight: normal;
  line-height: 36px;
  text-align: center;
  max-width: 248px;

  @media screen and (min-width: 376px) {
    max-width: 100%;
  }
`;

const EM = styled.em`
  color: ${(props) => (props.color ? props.theme[props.color] : "white")};
  font-style: normal;
  font-weight: bold;
`;

const ArrowDownImg = styled.img`
  position: absolute;
  left: 19px;
  bottom: 48px;
  height: 48px;
`;

const ButtonLinksContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 16px;
  bottom: 48px;
`;

function Header({ data, links }) {
  const { firstRow, secondRow } = data;

  return (
    <HeaderContainer>
      <HeaderText>
        {firstRow[0]}
        <EM color="primary">{firstRow[1]}</EM>
        <br />
        {secondRow[0]}
        <EM color="secondary">{secondRow[1]}</EM>
        {secondRow[2]}
        <EM>{secondRow[3]}</EM>
      </HeaderText>
      <ButtonLinksContainer>
        <ButtonLink href={links.github} target="_blank" />
        <ButtonLink type="linkedin" href={links.linkedin} target="_blank" />
      </ButtonLinksContainer>
      <ArrowDownImg src={ArrowDown} />
    </HeaderContainer>
  );
}

export default Header;

import styled from "styled-components";
import ArrowDown from "../../assets/images/arrow_down.svg";
import ButtonLink from "./ButtonLink";

const HeaderContainer = styled.section`
  background-color: ${(props) => props.theme.secondaryBackground};
  height: 100vh;
  padding: 0 19px;

  @media screen and (min-width: 426px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 992px) {
    padding: 0 119px;
  }
`;

const HeaderContainerMax = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;

  @media screen and (min-width: 992px) {
    max-width: 1366px;
    margin: 0 auto;
    position: relative;
  }
`;

const HeaderTextContainer = styled.div`
  width: 100%;
`;

const HeaderText = styled.h1`
  font-size: 28px;
  font-weight: normal;
  line-height: 36px;
  text-align: center;
  max-width: 248px;
  margin: 0 auto;

  @media screen and (min-width: 426px) {
    max-width: 688px;
    font-size: 32px;
    line-height: 40px;
  }

  @media screen and (min-width: 992px) {
    font-size: 40px;
    line-height: 48px;
    text-align: left;
    max-width: 840px;
    margin: initial;
  }
`;

const EM = styled.em`
  color: ${(props) => (props.color ? props.theme[props.color] : "white")};
  font-style: normal;
  font-weight: bold;
`;

const ArrowDownImg = styled.img`
  position: absolute;
  left: 0;
  bottom: 48px;
  height: 48px;
`;

const ButtonLinksContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 16px;
  bottom: 48px;

  @media screen and (min-width: 992px) {
    grid-column-gap: 24px;
  }
`;

function Header({ data, links }) {
  const { firstRow, secondRow } = data;

  return (
    <HeaderContainer>
      <HeaderContainerMax>
        <HeaderTextContainer>
          <HeaderText>
            {firstRow[0]}
            <EM color="primary">{firstRow[1]}</EM>
            <br />
            {secondRow[0]}
            <EM color="secondary">{secondRow[1]}</EM>
            {secondRow[2]}
            <EM>{secondRow[3]}</EM>
          </HeaderText>
        </HeaderTextContainer>
        <ButtonLinksContainer>
          <ButtonLink href={links.github} target="_blank" />
          <ButtonLink type="linkedin" href={links.linkedin} target="_blank" />
        </ButtonLinksContainer>
        <ArrowDownImg src={ArrowDown} />
      </HeaderContainerMax>
    </HeaderContainer>
  );
}

export default Header;

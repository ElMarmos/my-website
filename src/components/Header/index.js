import styled from "styled-components";

const HeaderContainer = styled.section`
  background-color: ${(props) => props.theme.secondaryBackground};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Fira Code', monospace;
`;

const HeaderText = styled.h1`
  font-size: 28px;
  font-weight: normal;
  line-height: 36px;
  text-align: center;
  max-width: 248px;
`;

const EM = styled.em`
  color: ${(props) => (props.color ? props.theme[props.color] : "white")};
  font-style: normal;
  font-weight: bold;
`;

function Header({ data }) {
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
    </HeaderContainer>
  );
}

export default Header;

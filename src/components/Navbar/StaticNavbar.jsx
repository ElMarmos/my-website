import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

const StaticNavbarContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  padding-top: 56px;
  display: none;

  @media screen and (min-width: 529px) {
    display: block;
  }

  @media screen and (min-width: 992px) {
    padding-top: 64px;
  }
`;

const ResponsiveContainer = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;

  @media screen and (min-width: 992px) {
    padding: 0 119px;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
`;
const Logo = styled.img`
  height: 24px;
`;

const ItemsContainer = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: 12px;

  @media screen and (min-width: 992px) {
    grid-row-gap: 15px;
  }
`;

const Item = styled.li``;

const ItemLink = styled.a`
  font-family: "Fira Code", monospace;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  color: white;

  @media screen and (min-width: 992px) {
    font-size: 12px;
  }
`;

const Underscore = styled.span`
  color: ${(props) => props.theme.primary};
`;

const StaticNavbar = ({ items }) => {
  return (
    <StaticNavbarContainer>
      <ResponsiveContainer>
        <LogoContainer>
          <Logo src={logo} alt="" />
        </LogoContainer>
        <ItemsContainer>
          {items.map((item, idx) => (
            <Item key={idx}>
              <ItemLink href={`#${item}`}>
                {item}
                <Underscore>_</Underscore>
              </ItemLink>
            </Item>
          ))}
        </ItemsContainer>
      </ResponsiveContainer>
    </StaticNavbarContainer>
  );
};

export default StaticNavbar;

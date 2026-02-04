import { useState } from "react";
import styled from "styled-components";
import useScrollPosition from "../../hooks/useScrollPosition";
import logo from "../../assets/images/logo.svg";
import logoAlt from "../../assets/images/logo_alt.svg";
import menu from "../../assets/images/menu_alt.svg";
import menuClose from "../../assets/images/menu_close.svg";
import useWindowSize from "../../hooks/useWindowSize";

const NavbarContainer = styled.nav`
  box-sizing: border-box;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
`;

const PaddingContainer = styled.div`
  padding: 0 19px;

  @media screen and (min-width: 529px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 992px) {
    padding: 0 119px;
  }
`;

const ClosedNavbarContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  max-width: 1366px;
  margin: 0 auto;
  padding: 44px 0;

  @media screen and (min-width: 529px) {
    padding: 56px 0;
  }

  @media screen and (min-width: 992px) {
    padding: 48px 0;
  }
`;

const Backdrop = styled.div`
  background-color: black;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  opacity: 0.4;
  display: ${(props) => (props.open ? "block" : "none")};
`;

const OpenNavButton = styled.button`
  height: 32px;
  width: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;

  img {
    height: 100%;
  }

  @media screen and (min-width: 529px) {
    height: 40px;
    width: 40px;
  }
`;

const LogoContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 24px;
`;

const NavbarNav = styled.div`
  background-color: ${(props) => props.theme.primary};
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  right: ${(props) => (props.open ? "0" : "-100%")};
  transition: right 0.4s ease-in-out, top 0.2s ease-in-out;
  z-index: 3;

  @media screen and (min-width: 529px) {
    right: initial;
    height: auto;
    top: ${(props) => (props.open ? "0" : "-100%")};
  }
`;

const NavbarNavContainer = styled.div`
  max-width: 1366px;
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100%;

  @media screen and (min-width: 529px) {
    justify-content: stretch;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: auto 1fr auto;
    padding: 0 119px;
  }
`;

const NavbarNavLogo = styled(Logo)`
  position: absolute;
  left: 19px;
  top: 48px;

  @media screen and (min-width: 529px) {
    left: 40px;
    top: 24px;
  }

  @media screen and (min-width: 992px) {
    position: initial;
  }
`;

const CloseNavButton = styled(OpenNavButton)`
  position: absolute;
  right: 19px;
  top: 44px;

  @media screen and (min-width: 529px) {
    right: 40px;
    top: 24px;
  }

  @media screen and (min-width: 992px) {
    position: initial;
  }
`;

const ItemsContainer = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: 24px;

  @media screen and (min-width: 529px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 16px;
    height: 100%;
    padding: 24px 96px 24px 108px;
    justify-items: center;
  }

  @media screen and (min-width: 992px) {
    padding: 35px 0;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

const Item = styled.li`
  color: ${(props) => props.theme.primaryBackground};
  text-align: center;

  @media screen and (min-width: 529px) {
    text-align: left;
  }
`;

const ItemLink = styled.button`
  background: none;
  border: none;
  font-family: "Fira Code", monospace;
  font-weight: 700;
  font-size: 21px;
  line-height: 32px;
  padding: 0;
  cursor: pointer;

  @media screen and (min-width: 529px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;

const Underscore = styled.span`
  color: white;
`;

const Navbar = ({ items = [] }) => {
  const scrollPosition = useScrollPosition();
  const size = useWindowSize();

  const [open, setOpen] = useState(false);

  const goToAnchor = (anchor) => {
    setOpen(false);
    setTimeout(
      () => {
        window.location = `#${anchor}`;
      },
      window.innerWidth <= 529 ? 400 : 200
    );
  };

  return (
    <NavbarContainer>
      {(scrollPosition > 231 && size.width > 529) || size.width <= 529 ? (
        <>
          <Backdrop open={open} onClick={() => setOpen(false)} />
          <PaddingContainer>
            <ClosedNavbarContainer>
              <LogoContainer>
                <Logo src={logo} alt="" />
              </LogoContainer>
              <OpenNavButton onClick={() => setOpen(true)}>
                <img src={menu} alt="" />
              </OpenNavButton>
            </ClosedNavbarContainer>
          </PaddingContainer>
          <NavbarNav open={open}>
            <NavbarNavContainer>
              <NavbarNavLogo src={logoAlt} alt="" />
              <ItemsContainer>
                {items.map((item, idx) => (
                  <Item key={idx}>
                    <ItemLink onClick={() => goToAnchor(item)}>
                      {item}
                      <Underscore>_</Underscore>
                    </ItemLink>
                  </Item>
                ))}
              </ItemsContainer>
              <CloseNavButton onClick={() => setOpen(false)}>
                <img src={menuClose} alt="" />
              </CloseNavButton>
            </NavbarNavContainer>
          </NavbarNav>
        </>
      ) : null}
    </NavbarContainer>
  );
};

export default Navbar;

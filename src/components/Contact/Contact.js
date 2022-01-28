import styled from "styled-components";
import ContactSectionTitle from "./ContactSectionTitle";
import triangleUp from "../../assets/images/triangle_up.svg";
import triangleDown from "../../assets/images/triangle_down.svg";
import ButtonLink from "../Header/ButtonLink";
import logo from "../../assets/images/logo.svg";

const ContactContainer = styled.section`
  padding: 48px 0 40px;
  text-align: center;

  @media screen and (min-width: 426px) {
    padding: 72px 40px 56px;
  }
`;

const NewContactSectionTitle = styled(ContactSectionTitle)`
  margin-bottom: 32px;

  @media screen and (min-width: 426px) {
    margin-bottom: 24px;
  }
`;

const ContactDecorationContainer = styled.div`
  align-items: center;
  height: 106px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 38px 0;

  @media screen and (min-width: 426px) {
    margin: 0 -40px;
    height: 216px;
    padding: 76px 0;
  }
`;

const LeftTriangleContainer = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-50%);
`;

const RightTriangleContainer = styled.div`
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(50%);
`;

const TriangleImage = styled.img`
  height: 100%;
`;

const Line = styled.div`
  display: inline-block;
  width: 1px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.lightGray};
`;

const Text = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin: 0 auto 48px;
  max-width: 310px;

  @media screen and (min-width: 426px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const ContactButton = styled.a`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primaryBackground};
  font-size: 14px;
  font-weight: 700;
  font-family: "Fira Code", monospace;
  line-height: 24px;
  padding: 16px 48px;
  text-decoration: none;
  border-radius: 2px;
  margin-bottom: 144px;
  display: inline-block;

  @media screen and (min-width: 426px) {
    font-size: 16px;
  }
`;

const LogoContainer = styled.div`
  font-size: 0;
  margin-bottom: 40px;
`;

const Logo = styled.img`
  height: 24px;
`;

const BLCont = styled.div`
  font-size: 0;
`;

const ButtonLinksContainer = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-column-gap: 16px;
  bottom: 48px;
`;

const Contact = ({
  number,
  sectionTitle,
  data: { text, contactBtnTxt, email },
  links: { github, linkedin },
}) => {
  return (
    <ContactContainer>
      <ContactDecorationContainer>
        <LeftTriangleContainer>
          <TriangleImage src={triangleUp} />
        </LeftTriangleContainer>
        <RightTriangleContainer>
          <TriangleImage src={triangleDown} />
        </RightTriangleContainer>
        <Line />
      </ContactDecorationContainer>
      <NewContactSectionTitle number={number} title={sectionTitle} />
      <Text>{text}</Text>
      <ContactButton href={`mailto:${email}`}>{contactBtnTxt}</ContactButton>
      <LogoContainer>
        <Logo src={logo} alt="" />
      </LogoContainer>
      <BLCont>
        <ButtonLinksContainer>
          <ButtonLink href={github} target="_blank" />
          <ButtonLink type="linkedin" href={linkedin} target="_blank" />
        </ButtonLinksContainer>
      </BLCont>
    </ContactContainer>
  );
};

export default Contact;

import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import triangleUp from "../../assets/images/triangle_up.svg";
import triangleDown from "../../assets/images/triangle_down.svg";
import ButtonLink from "../Header/ButtonLink";
import logo from '../../assets/images/logo.svg';

const ContactContainer = styled.section`
  padding: 48px 0;
  text-align: center;
`;

const NewSectionTitle = styled(SectionTitle)`
  margin-bottom: 32px;
`;

const ContactDecorationContainer = styled.div`
  height: 182px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftTriangleContainer = styled.div`
  height: 100%;
  position: absolute;
  left: -91px;
`;

const RightTriangleContainer = styled.div`
  height: 100%;
  position: absolute;
  right: -91px;
`;

const TriangleImage = styled.img`
  height: 100%;
`;

const Line = styled.div`
  display: inline-block;
  width: 1px;
  height: 104px;
  background-color: ${(props) => props.theme.colors.lightGray};
`;

const Text = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin: 0 auto 48px;
  max-width: 310px;
`;

const ContactButton = styled.a`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primaryBackground};
  font-weight: 700;
  font-family: "Fira Code", monospace;
  padding: 16px 48px;
  text-decoration: none;
  border-radius: 2px;
  margin-bottom: 144px;
  display: inline-block;
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
      <NewSectionTitle number={number} title={sectionTitle} />
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

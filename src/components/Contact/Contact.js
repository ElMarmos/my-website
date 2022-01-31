import styled from "styled-components";
import ContactSectionTitle from "./ContactSectionTitle";
import triangleUpSm from "../../assets/images/triangle_up_sm.svg";
import triangleDownSm from "../../assets/images/triangle_down_sm.svg";
import triangleUpMd from "../../assets/images/triangle_up_md.svg";
import triangleDownMd from "../../assets/images/triangle_down_md.svg";
import triangleUpLg from "../../assets/images/triangle_up_lg.svg";
import triangleDownLg from "../../assets/images/triangle_down_lg.svg";
import ButtonLink from "../Header/ButtonLink";
import logo from "../../assets/images/logo.svg";
import useWindowSize from "../../hooks/useWindowSize";

const ContactContainer = styled.section`
  padding: 48px 0 40px;

  @media screen and (min-width: 426px) {
    padding: 72px 0 56px;
  }

  @media screen and (min-width: 992px) {
    padding: 80px 0;
  }
`;

const ContactInnerContainer = styled.div`
  text-align: center;

  @media screen and (min-width: 426px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 992px) {
    padding: 0 119px;
    max-width: 1366px;
    margin: 0 auto;
  }
`;

const NewContactSectionTitle = styled(ContactSectionTitle)`
  margin-bottom: 32px;

  @media screen and (min-width: 426px) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 32px;
  }
`;

const ContactDecorationContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  height: 181px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 38px 0;

  @media screen and (min-width: 426px) {
    height: 368px;
    padding: 76px 0;
  }

  @media screen and (min-width: 992px) {
    height: 650px;
    padding: 120px 0;
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

  @media screen and (min-width: 992px) {
    font-size: 24px;
    line-height: 32px;
    max-width: 360px;
    margin: 0 auto 56px;
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

  @media screen and (min-width: 992px) {
    margin-bottom: 184px;
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

  @media screen and (min-width: 992px) {
    grid-column-gap: 24px;
  }
`;

const selectTriangleImage = (width, orientation = "up") => {
  if (width >= 992) {
    return orientation === "down" ? triangleDownLg : triangleUpLg;
  } else if (width >= 426) {
    return orientation === "down" ? triangleDownMd : triangleUpMd;
  }

  return orientation === "down" ? triangleDownSm : triangleUpSm;
};

const Contact = ({
  number,
  sectionTitle,
  data: { text, contactBtnTxt, email },
  links: { github, linkedin },
  ...rest
}) => {
  const size = useWindowSize();

  return (
    <ContactContainer {...rest}>
      <ContactDecorationContainer>
        <LeftTriangleContainer>
          <TriangleImage src={selectTriangleImage(size.width)} />
        </LeftTriangleContainer>
        <RightTriangleContainer>
          <TriangleImage src={selectTriangleImage(size.width, "down")} />
        </RightTriangleContainer>
        <Line />
      </ContactDecorationContainer>
      <ContactInnerContainer>
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
      </ContactInnerContainer>
    </ContactContainer>
  );
};

export default Contact;

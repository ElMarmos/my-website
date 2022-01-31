import styled from "styled-components";
import MyPhoto from "../../assets/images/picture.jpg";

const AboutContainer = styled.section`
  padding: 96px 0 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 426px) {
    padding: 144px 40px 72px;
  }

  @media screen and (min-width: 992px) {
    padding: 160px 119px 80px;
    flex-direction: row;
  }
`;

const Text = styled.h2`
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  font-weight: normal;
  max-width: 248px;
  margin: 0;
  margin-bottom: 56px;

  @media screen and (min-width: 426px) {
    font-size: 24px;
    line-height: 32px;
    max-width: 600px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 992px) {
    font-size: 28px;
    line-height: 40px;
    text-align: left;
    max-width: 648px;
    margin-bottom: 0;
    margin-right: 97px;
  }
`;

const TextLink = styled.a`
  color: ${(props) => props.theme.colors.red};
  font-weight: bold;
  font-style: normal;
  font-family: "Fira Code", monospace;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 426px) {
    font-size: 20px;
  }

  @media screen and (min-width: 992px) {
    font-size: 24px;
  }
`;

const MyImageContainer = styled.div`
  height: 182px;
  width: 248px;
  position: relative;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 426px) {
    height: 280px;
    width: 382px;
  }
`;

const MyImage = styled.img`
  height: 100%;
  background-color: ${(props) => props.theme.primary};
  z-index: 1;
`;

const ImageDecorationLeft = styled.div`
  height: 0;
  width: 0;
  border-width: 70px 0 0 51px;
  border-style: solid;
  border-color: transparent;
  border-top-color: ${(props) => props.theme.secondary};
  position: absolute;
  left: 0;
  top: 10px;

  @media screen and (min-width: 426px) {
    top: 35px;
  }
`;

const ImageDecorationRight = styled(ImageDecorationLeft)`
  right: 0;
  left: auto;
  top: auto;
  bottom: 10px;
  border-top-color: transparent;
  border-bottom-color: ${(props) => props.theme.secondary};
  border-width: 0 51px 70px 0;

  @media screen and (min-width: 426px) {
    bottom: 35px;
  }
`;

const About = ({ data, ...rest }) => {
  return (
    <AboutContainer {...rest}>
      <Text>
        {data.text[0]}
        <TextLink href={data.twilioUrl} target="_blank">
          {data.text[1]}
        </TextLink>
        {data.text[2]}
      </Text>
      <MyImageContainer>
        <ImageDecorationLeft />
        <ImageDecorationRight />
        <MyImage src={MyPhoto} alt="" />
      </MyImageContainer>
    </AboutContainer>
  );
};

export default About;

import styled from "styled-components";
import MyPhoto from "../../assets/images/picture.jpg";

const AboutContainer = styled.section`
  padding: 96px 0 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h2`
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  font-weight: normal;
  max-width: 248px;
  margin: 0;
  margin-bottom: 56px;
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
`;

const MyImageContainer = styled.div`
  height: 182px;
  width: 248px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const MyImage = styled.img`
  height: 182px;
  width: 182px;
  background-color: ${(props) => props.theme.primary};
  z-index: 1;
`;

const ImageDecorationLeft = styled.div`
  height: 0;
  width: 0;
  border-width: 45px 0 0 33px;
  border-style: solid;
  border-color: transparent;
  border-top-color: ${(props) => props.theme.secondary};
  position: absolute;
  left: 0;
  top: 10px;
`;

const ImageDecorationRight = styled(ImageDecorationLeft)`
  right: 0;
  left: auto;
  top: auto;
  bottom: 10px;
  border-top-color: transparent;
  border-bottom-color: ${(props) => props.theme.secondary};
  border-width: 0 33px 45px 0;
`;

const About = ({ data }) => {
  return (
    <AboutContainer>
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

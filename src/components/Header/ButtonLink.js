import styled from "styled-components";
import GitHubIcon from "../../assets/images/github.svg";
import LinkedInIcon from "../../assets/images/linkedin.svg";

const ButtonLinkA = styled.a`
  height: 32px;
  width: 32px;
  font-size: 0;
`;

const ButtonLink = ({ type, ...rest }) => {
  return (
    <ButtonLinkA {...rest}>
      <img src={type === "linkedin" ? LinkedInIcon : GitHubIcon} alt="" />
    </ButtonLinkA>
  );
};

export default ButtonLink;

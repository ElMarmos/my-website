import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import triangleImage from "../../assets/images/education_triangle.svg";

const EducationContainer = styled.section`
  padding: 48px 0;
  position: relative;

  @media screen and (min-width: 426px) {
    padding: 72px 0;
  }

  @media screen and (min-width: 992px) {
    padding: 80px 0;
  }
`;

const ResponsiveContainer = styled.div`
  position: relative;
  padding: 0 16px;

  @media screen and (min-width: 426px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 992px) {
    padding: 0 119px;
    max-width: 1366px;
    margin: 0 auto;
  }
`;

const TriangleImage = styled.img`
  width: 128px;
  position: absolute;
  right: 0;
  bottom: 9px;
  display: none;
  overflow: hidden;

  @media screen and (min-width: 680px) {
    display: block;
  }

  @media screen and (min-width: 992px) {
    width: 211px;
    bottom: -24px;
    right: 0;
  }

  @media screen and (min-width: 1200px) {
    width: 311px;
    bottom: -74px;
    right: 0;
  }
`;

const EducationItemsContainer = styled.div`
  @media screen and (min-width: 992px) {
    margin-left: auto;
    max-width: 744px;
  }
`;

const EducationItem = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  padding: 16px 0;
  font-family: "Fira Code", monospace;
  font-size: 12px;
  line-height: 20px;
  max-width: 424px;

  &:first-child {
    border-top: 1px solid ${(props) => props.theme.colors.lightGray};
  }

  @media screen and (min-width: 426px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 680px) {
    margin-left: 14%;
  }

  @media screen and (min-width: 992px) {
    margin: initial;
    max-width: 456px;
    padding: 24px 0;
  }
`;

const EM = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.colors.gold};
`;

const LocationLink = styled.a`
  font-weight: bold;
  color: ${(props) => props.theme.colors.red};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NewSectionTitle = styled(SectionTitle)`
  margin-bottom: 64px;

  @media screen and (min-width: 426px) {
    margin-bottom: 104px;
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 120px;
  }
`;

const Dates = styled.span`
  color: ${(props) => props.theme.colors.lightGray};

  @media screen and (min-width: 426px) {
    font-size: 14px;
  }
`;

const Education = ({ items, number, sectionTitle }) => {
  return (
    <EducationContainer>
      <TriangleImage src={triangleImage} alt="" />
      <ResponsiveContainer>
        <NewSectionTitle number={number} title={sectionTitle} />
        <EducationItemsContainer>
          {items.map(
            ({ title, location, locationUrl, from, to, degree, name }, idx) => (
              <EducationItem key={idx}>
                {title}{" "}
                <LocationLink href={locationUrl} target="_blank">
                  {location}
                </LocationLink>{" "}
                <br />
                <Dates>
                  {from} - {to}
                </Dates>
                <br />
                <EM>{degree}</EM>
                {name}
              </EducationItem>
            )
          )}
        </EducationItemsContainer>
      </ResponsiveContainer>
    </EducationContainer>
  );
};

export default Education;

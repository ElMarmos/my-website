import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";

const EducationContainer = styled.section`
  padding: 48px 16px;
`;

const EducationItem = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  padding: 16px 0;
  font-family: "Fira Code";
  font-size: 12px;
  line-height: 20px;

  &:first-child {
    border-top: 1px solid ${(props) => props.theme.colors.lightGray};
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
`;

const Dates = styled.span`
  color: ${(props) => props.theme.colors.lightGray};
`;

const Education = ({ items, number, sectionTitle }) => {
  return (
    <EducationContainer>
      <NewSectionTitle number={number} title={sectionTitle} />
      <div>
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
      </div>
    </EducationContainer>
  );
};

export default Education;

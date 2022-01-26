import styled, { css } from "styled-components";
import theme from "../../constants/theme";

const COLORS = [
  theme.colors.red,
  theme.primary,
  theme.secondary,
  theme.colors.gold,
  theme.colors.green,
];

const ExperienceItemContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  padding: 24px 0;
  text-align: center;
  font-family: "Fira Code", monospace;

  &:first-child {
    border-top: 1px solid ${(props) => props.theme.colors.lightGray};
  }

  @media screen and (min-width: 426px) {
    text-align: left;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "dates position arrow"
      "dates company arrow"
      "dates summary summary";
  }
`;

const Dates = styled.p`
  color: ${(props) => props.theme.colors.lightGray};
  margin: 0 0 24px;
  font-size: 12px;
  line-height: 20px;

  @media screen and (min-width: 426px) {
    font-size: 14px;
    line-height: 24px;
    margin: 0 113px 0 0;
    grid-area: dates;
    place-self: center;
    white-space: nowrap;
    min-width: 160px;
  }
`;

const Position = styled.p`
  color: white;
  font-weight: 600;
  margin: 0 0 4px;
  font-size: 14px;
  line-height: 24px;

  @media screen and (min-width: 426px) {
    grid-area: position;
    align-self: center;
    font-size: 16px;
    line-height: 24px;
  }
`;

const Company = styled.a`
  color: ${(props) => COLORS[props.colorIdx]};
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 24px;
  text-decoration: none;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 426px) {
    grid-area: company;
    justify-self: start;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }
`;

const ArrowContainer = styled.div`
  @media screen and (min-width: 426px) {
    grid-area: arrow;
    align-self: center;
  }
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`;

const Arrow = styled.span`
  border-color: ${(props) => props.theme.colors.lightGray}
    ${(props) => props.theme.colors.lightGray} transparent transparent;
  border-width: 1px;
  border-style: solid;
  height: 8px;
  width: 8px;
  display: inline-block;
  transform: rotate(135deg);

  ${(props) =>
    props.open &&
    css`
      transform: translateY(50%) rotate(-45deg);
    `}
`;

const Summary = styled.p`
  color: ${(props) => props.theme.colors.lightGray};
  font-size: 12px;
  line-height: 20px;
  height: 0;
  overflow: hidden;
  margin: 0;

  ${(props) =>
    props.open &&
    css`
      height: auto;
      padding-top: 24px;
    `}

  @media screen and (min-width: 426px) {
    grid-area: summary;
    font-size: 14px;
    line-height: 24px;
  }
`;

const ExperienceItem = ({
  from,
  to,
  position,
  company,
  companyUrl,
  summary,
  index,
  open,
  setOpen,
}) => {
  return (
    <ExperienceItemContainer>
      <Dates>
        {from} - {to}
      </Dates>
      <Position>{position}</Position>
      {companyUrl ? (
        <Company
          href={companyUrl}
          target="_blank"
          colorIdx={index % COLORS.length}
        >
          {company}
        </Company>
      ) : (
        <Company color={index % COLORS.length}>{company}</Company>
      )}
      <ArrowContainer>
        <ArrowButton onClick={() => setOpen(!open ? index : -1)}>
          <Arrow open={open} />
        </ArrowButton>
      </ArrowContainer>
      <Summary open={open}>
        {summary.map((item, idx) => (
          <span key={idx}>
            {item}
            <br />
            {idx !== summary.length - 1 ? <br /> : null}
          </span>
        ))}
      </Summary>
    </ExperienceItemContainer>
  );
};

export default ExperienceItem;

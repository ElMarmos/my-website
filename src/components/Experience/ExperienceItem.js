import { useState } from "react";
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
`;

const Dates = styled.p`
  color: ${(props) => props.theme.colors.lightGray};
  margin: 0 0 24px;
  font-size: 12px;
  line-height: 20px;
`;

const Position = styled.p`
  color: white;
  font-weight: 600;
  margin: 0 0 4px;
  font-size: 14px;
  line-height: 24px;
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
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`;

const Arrow = styled.span`
  border-color: ${(props) => props.theme.colors.lightGray}
    ${(props) => props.theme.colors.lightGray} transparent transparent;
  border-width: 2px;
  border-style: solid;
  height: 10px;
  width: 10px;
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
      <div>
        <ArrowButton onClick={() => setOpen(!open ? index : -1)}>
          <Arrow open={open} />
        </ArrowButton>
      </div>
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

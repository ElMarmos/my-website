import styled from "styled-components";
import theme from "../../constants/theme";
import SectionTitle from "../SectionTitle/SectionTitle";
import cepsImage from "../../assets/images/ceps.png";
import marPeruanoImage from "../../assets/images/mar_peruano.png";

const COLORS = [
  theme.colors.green,
  theme.colors.red,
  theme.colors.gold,
  theme.secondary,
  theme.primary,
];

const IMAGES = [cepsImage, marPeruanoImage];

const PortfolioContainer = styled.section`
  padding: 48px 20px;
  font-family: "Fira Code", monospace;

  @media screen and (min-width: 426px) {
    padding: 72px 40px;
  }
`;

const NewSectionTitle = styled(SectionTitle)`
  margin-bottom: 64px;

  @media screen and (min-width: 426px) {
    margin-bottom: 104px;
  }
`;

const PortfolioItemsContainer = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: 56px;

  @media screen and (min-width: 426px) {
    grid-row-gap: 88px;
    justify-content: center;
  }
`;

const PortfolioItem = styled.div`
  max-width: 687px;
`;

const PortfolioImageLink = styled.a`
  display: block;
`;

const PortfolioImage = styled.img`
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  display: block;
`;

const Separator = styled.div`
  background-color: ${(props) => props.theme.colors.lightGray};
  height: 1px;
  margin: 24px 0;
  width: 100%;
  font-size: 0;
`;

const PortfolioSummary = styled.p`
  color: ${(props) => props.theme.colors.lightGray};
  font-size: 12px;
  line-height: 20px;
  margin-top: 0;
  margin-bottom: 4px;
  text-transform: uppercase;

  @media screen and (min-width: 426px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const PortfolioTitle = styled.h4`
  color: ${(props) => COLORS[props.colorIdx]};
  margin: 0;
  font-size: 16px;
  line-height: 28px;

  @media screen and (min-width: 426px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

const Portfolio = ({ number, sectionTitle, items }) => {
  return (
    <PortfolioContainer>
      <NewSectionTitle number={number} title={sectionTitle} />
      <PortfolioItemsContainer>
        {items.map(({ title, summary, url }, idx) => (
          <PortfolioItem key={idx}>
            {url ? (
              <PortfolioImageLink href={url} target="_blank">
                <PortfolioImage src={IMAGES[idx]} alt="" />
              </PortfolioImageLink>
            ) : (
              <PortfolioImage src={IMAGES[idx]} alt="" />
            )}
            <Separator />
            <PortfolioSummary>{summary}</PortfolioSummary>
            <PortfolioTitle colorIdx={idx}>{title}</PortfolioTitle>
          </PortfolioItem>
        ))}
      </PortfolioItemsContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;

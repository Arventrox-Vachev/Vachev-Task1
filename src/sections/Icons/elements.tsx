import styled from "styled-components";
import { SectionContainer as _SectionContainer, Typography } from "components";
import { IconCard as _IconCard } from "collections";

export const SectionContainer = styled(_SectionContainer).attrs({ variant: "primary" })``;

export const Title = styled(Typography.H1)`
  width: 100%;
  padding: 80px 30px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  text-align: center;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 42px 20px;
  }
`;

export const IconsWrapper = styled("div")`
  margin: 80px 60px 102px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: max(40px, 8vw);
  row-gap: 81px;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    grid-template-columns: repeat(1, 1fr);
    margin: 20px;
    gap: 0;
  }
`;

export const IconCard = styled(_IconCard)``;

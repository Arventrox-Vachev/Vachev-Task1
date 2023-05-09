import styled from "styled-components";
import {
  SectionContainer as _SectionContainer,
  Typography,
  CardContainer as _CardContainer
} from "components";
import { IconsCard as _IconsCard } from "collections";

export const SectionContainer = styled(_SectionContainer)``;

export const CardContainer = styled(_CardContainer)`
  padding-bottom: 104px;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding-bottom: 36px;
  }
`;

export const Title = styled(Typography.H1)`
  width: 100%;
  padding: 0 40px 80px;
  margin-bottom: 80px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};

  > span {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 0 20px 40px;
    margin-bottom: 24px;
  }
`;

export const IconsContainer = styled("div")`
  padding: 0 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 0 20px;
    grid-template-columns: 1fr;
  }
`;

export const IconsCard = styled(_IconsCard)`
  margin-bottom: 80px;

  &:nth-child(even) {
    margin-left: auto;
  }

  &:nth-last-child(-n + 2) {
    margin-bottom: 0;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin-bottom: 80px;

    &:nth-last-child(-n + 2) {
      margin-bottom: 80px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

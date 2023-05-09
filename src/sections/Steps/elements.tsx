import styled from "styled-components";
import {
  SectionContainer as _SectionContainer,
  Typography,
  CardContainer as _CardContainer
} from "components";
import { StepsCard as _StepsCard } from "collections";

export const SectionContainer = styled(_SectionContainer)`
  margin-bottom: 0;
`;

export const CardContainer = styled(_CardContainer)`
  padding-bottom: 0;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    background-color: ${({ theme }) => theme.colors.transparentPrimary};
  }
`;

export const Title = styled(Typography.H1)`
  width: 100%;
  padding: 0 40px 80px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};

  > span {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 0 20px 40px;
  }
`;

export const StepsCardsWrapper = styled("div")`
  display: flex;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    flex-direction: column;
  }
`;

export const StepsCard = styled(_StepsCard)`
  flex-basis: 33.333%;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    flex-basis: auto;
  }
`;

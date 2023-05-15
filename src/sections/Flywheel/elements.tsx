import styled from "styled-components";
import {
  SectionContainer as _SectionContainer,
  Typography,
  CardContainer as _CardContainer
} from "components";
import { FlywheelCard as _FlywheelCard } from "collections";

export const SectionContainer = styled(_SectionContainer)``;

export const CardContainer = styled(_CardContainer)``;

export const Title = styled(Typography.H1)`
  width: 100%;
  padding: 0 40px 80px;
  margin-bottom: 40px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};

  > span {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 0 20px 40px;
  }
`;

export const TextContainer = styled("div")`
  padding: 0px 232px;
  margin-bottom: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${({ theme }) => theme.breakpoint.max.L} {
    padding: 0 120px;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 0 60px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 0 20px;
  }
`;

export const Description = styled(Typography.Paragraph)`
  padding-right: 60px;
  margin-bottom: 12px;

  &:first-child {
    margin-bottom: 28px;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding-right: 0px;

    &:first-child {
      margin: 0;
    }

    &:last-child {
      display: none;
    }
  }
`;

export const FlywheelWrapper = styled("div")`
  width: 100%;
  padding: 0 116px;
  display: grid;

  @media ${({ theme }) => theme.breakpoint.max.L} {
    padding: 12px 52px;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 0 20px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const FlywheelCard = styled(_FlywheelCard)`
  margin-top: auto;

  &:first-child {
    margin: 0 auto 40px;
    grid-column: 1/4;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    &:first-child {
      order: 1;
    }

    & + & {
      margin: 0 auto 40px;
    }
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    align-items: flex-start;
    text-align: left;
  }
`;

export const ImageWrapper = styled("div")`
  min-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  grid-column: 2 / 3;
  grid-row: 2;

  @media ${({ theme }) => theme.breakpoint.max.L} {
    min-width: 332px;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    min-width: auto;
    margin-bottom: 40px;
    order: 1;
  }
`;

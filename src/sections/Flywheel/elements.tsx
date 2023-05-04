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
  padding: 80px 40px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};

  > span {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 42px 20px;
  }
`;

export const TextContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 37px 40px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 37px 21px;
  }
`;

export const Text = styled(Typography.Paragraph)`
  max-width: 894px;
  width: 100%;
  padding-right: 60px;

  &:first-child {
    margin-bottom: 29px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
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
  padding: 14px 116px 80px 116px;

  display: grid;
  row-gap: 40px;

  @media ${({ theme }) => theme.breakpoint.max.L} {
    padding: 14px 50px 80px 50px;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 0 20px 40px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const FlywheelCard = styled(_FlywheelCard)`
  margin-top: auto;

  &:first-child {
    grid-column: 1/4;
    margin-left: auto;
    margin-right: auto;
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
    min-width: 330px;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    order: 1;
    min-width: 281px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    min-width: auto;
  }
`;

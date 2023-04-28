import styled from "styled-components";
import {
  SectionContainer as _SectionContainer,
  H1 as _H1,
  TextContainer as _TextContainer,
  Paragraph as _Paragraph,
  ImageWrapper as _ImageWrapper
} from "components";
import { FlywheelCard as _FlywheelCard } from "collections";

export const SectionContainer = styled(({ ...props }) => (
  <_SectionContainer variant='primary' {...props} />
))`
  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 0;
    padding-bottom: 16px;
  }
`;

export const Title = styled(_H1)`
  width: 100%;
  padding: 80px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  text-align: center;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 42px 0;
  }
`;

export const TextContainer = styled(_TextContainer)`
  flex-direction: column;
  padding: 40px 233px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 37px 21px;
  }
`;

export const Paragraph = styled(_Paragraph)`
  padding-right: 60px;

  &:first-child {
    padding-right: 0;
    margin-bottom: 57px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
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

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 20px;
    /* gap: 40px; */
    padding-top: 0;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const FlywheelCardWrapper = styled("div")`
  margin-top: auto;

  &:first-child {
    grid-column: 1/4;
    margin-left: auto;
    margin-right: auto;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    &:first-child {
      order: 1;
    }
  }
`;
export const FlywheelCard = styled(({ ...props }) => <_FlywheelCard {...props} />)``;

export const ImageWrapper = styled(_ImageWrapper)`
  grid-column: 2 / 3;
  grid-row: 2;
  min-width: 500px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    order: 1;

    min-width: auto;
  }
`;

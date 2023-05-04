import styled from "styled-components";
import { Typography } from "components";

export const StepsCardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  border-right: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 81px 60px 40px 60px;

  & ~ & {
    padding-left: 74px;
  }

  &:last-child {
    border: none;
    padding-left: 90px;
    padding-right: 32px;
  }

  @media ${({ theme }) => theme.breakpoint.max.L} {
    padding: 54px 24px 40px 24px;
    align-items: center;

    & ~ & {
      padding: 54px 24px 40px 24px;
    }

    &:last-child {
      padding: 54px 24px 40px 24px;
    }
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 54px 24px 20px 24px;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};

    & ~ & {
      padding-top: 41px;
      padding-bottom: 0px;

      > div {
        margin-bottom: 33px;
      }
    }

    &:last-child {
      padding: 39px 24px 0px 24px;
      border: none;

      > div {
        margin-bottom: 23px;
      }
    }
  }
`;

export const ImageWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding-right: 24px;

  > * {
    margin-bottom: 20px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 0;
  }
`;

export const NumberWrapper = styled("div")`
  max-width: 40px;
  height: 40px;
  width: 100%;
  margin-top: 4px;

  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.yellow};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 16px;
  text-align: center;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    margin-top: -7px;
  }
`;

export const Title = styled(Typography.H2)`
  color: ${({ theme }) => theme.colors.yellow};
`;

export const HighlightedText = styled(Typography.Paragraph).attrs({ variant: "sm" })`
  font-weight: 500;
`;

export const Text = styled(Typography.Paragraph).attrs({ variant: "sm" })``;

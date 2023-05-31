import styled from "styled-components";
import { Typography } from "components";

export const StepsCardContainer = styled("div")`
  padding: 80px 60px 60px;
  display: flex;
  flex-direction: column;
  border-right: 2px solid ${({ theme }) => theme.colors.secondary};

  &:last-child {
    border: none;
  }

  @media ${({ theme }) => theme.breakpoint.max.L} {
    padding: 60px 40px 40px;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 24px 24px 40px;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const ImageWrapper = styled("div")`
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin-bottom: 0;
    min-height: 220px;
  }
`;

export const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding-right: 24px;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 0;
  }
`;

export const NumberWrapper = styled("div")`
  width: 40px;
  height: 40px;
  margin-bottom: 20px;

  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.yellow};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: 16px;
  text-align: center;
`;

export const Heading = styled(Typography.H2)`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const Subheading = styled(Typography.Paragraph).attrs({ variant: "sm" })`
  margin-bottom: 20px;
  font-weight: 500;
`;

export const Description = styled(Typography.Paragraph).attrs({ variant: "sm" })``;

import styled from "styled-components";
import { Typography } from "components";

export const FlywheelCardContainer = styled("div")`
  max-width: 280px;
  width: 100%;
`;

export const Title = styled(Typography.H2)`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.yellow};

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin: 21px 0;
  }
`;

export const Text = styled(Typography.Paragraph).attrs({ variant: "sm" })``;

export const ImageWrapper = styled("div")`
  display: flex;

  @media ${({ theme }) => theme.breakpoint.min.M} {
    display: none;
  }
`;

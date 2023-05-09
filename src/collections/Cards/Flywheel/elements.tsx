import styled from "styled-components";
import { Typography } from "components";

export const FlywheelCardContainer = styled("div")`
  max-width: 280px;
  width: 100%;
`;

export const Title = styled(Typography.H2)`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const Text = styled(Typography.Paragraph).attrs({ variant: "sm" })``;

export const ImageWrapper = styled("div")`
  margin-bottom: 20px;
  display: flex;

  @media ${({ theme }) => theme.breakpoint.min.M} {
    display: none;
  }
`;

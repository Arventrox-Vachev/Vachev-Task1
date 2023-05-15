import styled from "styled-components";
import { Typography } from "components";

export const IconWrapper = styled("div")`
  width: 100%;
  max-width: 560px;
  display: flex;
  justify-self: left;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin: 0 auto;
  }
`;

export const ImageWrapper = styled("div")`
  min-width: 80px;
  margin: 0 20px auto 0;
`;

export const TextContainer = styled("div")`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled(Typography.Paragraph).attrs({ variant: "sm" })`
  margin-bottom: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const Description = styled(Typography.Paragraph).attrs({ variant: "sm" })``;

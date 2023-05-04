import styled from "styled-components";
import { Typography } from "components";

export const IconWrapper = styled("div")`
  display: flex;
  max-width: 560px;
  width: 100%;
  gap: 20px;
`;

export const ImageWrapper = styled("div")`
  margin-bottom: auto;
  min-width: 80px;
`;

export const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  max-width: 451px;
  width: 100%;
`;

export const Title = styled(Typography.Paragraph).attrs({ variant: "sm" })`
  margin-bottom: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const Text = styled(Typography.Paragraph).attrs({ variant: "sm" })``;

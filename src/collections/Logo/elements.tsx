import styled from "styled-components";
import { Typography, Button as _Button } from "components";

export const LogoContainer = styled("div")`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled("div")`
  min-width: 52px;
  display: flex;
  align-items: center;
`;

export const Text = styled(Typography.Paragraph).attrs({ variant: "md" })`
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

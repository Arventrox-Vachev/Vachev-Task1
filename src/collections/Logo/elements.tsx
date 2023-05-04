import styled from "styled-components";
import { Typography, Button as _Button } from "components";

export const LogoContainer = styled("div")`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled("div")`
  display: flex;
  align-items: center;
  min-width: 53px;
`;

export const LogoText = styled(Typography.Paragraph).attrs({ variant: "md" })`
  color: ${({ theme }) => theme.colors.white};
  padding-left: 15px;
`;

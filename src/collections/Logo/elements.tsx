import styled from "styled-components";
import { Typography, ImageWrapper as _ImageWrapper, Button as _Button } from "components";

export const LogoWrapper = styled("div")`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled(_ImageWrapper)`
  min-width: 60.59px;
  width: 100%;
`;

export const LogoText = styled(Typography.Paragraph).attrs({ variant: "md" })`
  color: ${({ theme }) => theme.colors.white};
  padding-left: 15px;
`;

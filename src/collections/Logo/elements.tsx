import styled from "styled-components";
import { Paragraph as _LogoText, Image as _Image, Button as _Button } from "components";
import { LogoContainerProps, LogoTextProps } from "./Logo";

export const LogoContainer = styled(props => <div {...props} />)<LogoContainerProps>`
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled(_Image)``;

export const LogoText = styled(props => <_LogoText {...props} />)<LogoTextProps>`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  padding-left: 15px;
`;

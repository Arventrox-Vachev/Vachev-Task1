import styled from "styled-components";
import type { HeaderProps } from "./Header";
import { Button as _Button } from "components";
import { Logo as _Logo } from "collections";

export const Header = styled("header")<HeaderProps>`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 23.5px 41px;
`;

export const Logo = styled(({ ...props }) => <_Logo {...props} />)``;

export const Button = styled(_Button)`
  margin-left: auto;
`;

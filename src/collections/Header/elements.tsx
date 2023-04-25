import styled from "styled-components";
import type { HeaderProps } from "./Header";
import { Button as _Button } from "components";
import { Logo as _Logo } from "collections";

export const Header = styled("header")<HeaderProps>`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 23.5px 34px 23.5px 34px;
`;

export const Logo = styled(({ ...props }) => <_Logo {...props} />)``;

export const Button = styled(_Button)`
  width: 120px;
  height: 51px;
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

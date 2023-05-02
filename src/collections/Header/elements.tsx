import styled from "styled-components";
import { Button as _Button } from "components";
import { Logo as _Logo } from "collections";
import type { HeaderProps } from "./Header";

export const Header = styled("header")<HeaderProps>`
  padding: 23.5px 41px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 23.5px 20.5px;
  }
`;

export const Logo = styled(({ ...props }) => <_Logo {...props} />)``;

export const Button = styled(_Button)`
  margin-left: auto;
`;

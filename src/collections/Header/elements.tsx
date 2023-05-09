import styled from "styled-components";
import { Button as _Button } from "components";
import { Logo as _Logo } from "collections/Logo";

export const Header = styled("header")`
  padding: 24px 40px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 24px 20px;
  }
`;

export const Logo = styled(_Logo)``;

export const Button = styled(_Button)`
  margin-left: auto;
`;

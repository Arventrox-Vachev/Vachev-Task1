import styled from "styled-components";
import { Button as _Button } from "components";
import { Logo as _Logo } from "collections/Logo";
import { SignUpForm as _SignUpForm } from "collections/Forms/SignUpForm";
import { SignInForm as _SignInForm } from "collections/Forms/SignInForm";

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
  margin-left: 12px;

  &:first-of-type {
    margin-left: auto;

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
`;
export const SignUpForm = styled(_SignUpForm)`
  z-index: 10;
  position: absolute;
  right: 20px;
  top: 120px;
`;
export const SignInForm = styled(_SignInForm)`
  z-index: 10;
  position: absolute;
  right: 20px;
  top: 120px;
`;

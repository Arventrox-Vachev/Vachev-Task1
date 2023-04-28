import styled, {
  css,
  FlattenInterpolation,
  ThemedStyledProps,
  DefaultTheme
} from "styled-components";
import type { ButtonProps } from "./Button";

const buttonStyles: Record<
  NonNullable<ButtonProps["variant"]>,
  FlattenInterpolation<ThemedStyledProps<ButtonProps, DefaultTheme>>
> = {
  primary: css`
    width: 119px;

    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    transition: color 500ms ease, background-color 500ms ease;
    font-weight: 500;

    &:hover {
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.yellow};
    }
  `,

  secondary: css`
    width: 125px;

    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.yellow};
    padding: 14px 37px;
    border: none;
    transition: color 500ms ease, background-color 500ms ease;
    border: 2px solid transparent;

    &:hover {
      background-color: transparent;
      border-color: ${({ theme }) => theme.colors.yellow};
      color: ${({ theme }) => theme.colors.yellow};
    }
  `
};

export const Button = styled("button")<ButtonProps>`
  height: 51px;

  font-family: "Barlow", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  cursor: pointer;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ variant }) => buttonStyles[variant!]}

  @media ${({ theme }) => theme.breakpoint.max.S} {
    width: 79px;
  }
`;

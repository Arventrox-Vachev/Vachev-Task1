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
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    transition: opacity 300ms ease;

    &:hover {
      opacity: 0.8;
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.colors.white};
    background-color: transparent;
    padding: 0.9em 2em;
    border: 1px solid ${({ theme }) => theme.colors.white};
    transition: color 500ms ease, background-color 500ms ease;

    &:hover {
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.white};
    }
  `
};

export const Button = styled("button")<ButtonProps>`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ variant }) => buttonStyles[variant!]}
`;

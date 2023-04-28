import styled, {
  css,
  FlattenInterpolation,
  ThemedStyledProps,
  DefaultTheme
} from "styled-components";
import type { SectionContainerProps } from "./SectionContainer";

const sectionStyles: Record<
  NonNullable<SectionContainerProps["variant"]>,
  FlattenInterpolation<ThemedStyledProps<SectionContainerProps, DefaultTheme>>
> = {
  primary: css`
    margin-bottom: 80px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 16px;
    flex-direction: column;
    align-items: center;

    @media ${({ theme }) => theme.breakpoint.max.S} {
      max-width: 320px;
      margin-bottom: 40px;
    }
  `,

  secondary: css`
    padding-top: 30px;
    padding-bottom: 80px;

    @media ${({ theme }) => theme.breakpoint.max.S} {
      max-width: 360px;
      padding: 259px 20px 40px 20px;
    }
  `
};

export const SectionContainer = styled("section")<SectionContainerProps>`
  display: flex;
  max-width: 1360px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${({ variant }) => sectionStyles[variant!]}
`;

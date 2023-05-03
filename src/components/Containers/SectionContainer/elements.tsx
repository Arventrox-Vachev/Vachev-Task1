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
    width: calc(100% - 80px);

    @media ${({ theme }) => theme.breakpoint.max.S} {
      width: calc(100% - 40px);
    }
  `,

  secondary: css`
    padding: 30px 40px 80px;
    margin: 0;

    @media ${({ theme }) => theme.breakpoint.max.M} {
      padding: 420px 0 40px 0;
    }

    @media ${({ theme }) => theme.breakpoint.max.S} {
      margin: 0;
      padding: 240px 0 20px 0;
    }
  `
};

export const SectionContainer = styled("section")<SectionContainerProps>`
  display: flex;
  max-width: 1440px;
  width: 100%;
  ${({ variant }) => sectionStyles[variant!]}
`;

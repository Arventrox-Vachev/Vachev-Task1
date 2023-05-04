import styled from "styled-components";
import type { SectionContainerProps } from "./SectionContainer";

export const SectionContainer = styled("section")<SectionContainerProps>`
  display: flex;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  margin-bottom: 80px;
  padding: 0 40px;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 0 20px;
    margin-bottom: 40px;
  }
`;

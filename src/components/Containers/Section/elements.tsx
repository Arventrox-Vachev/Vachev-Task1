import styled from "styled-components";
import type { SectionContainerProps } from "./SectionContainer";

export const SectionContainer = styled("section")`
  max-width: 1440px;
  width: 100%;
  padding: 0 40px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin-bottom: 40px;
  }
  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 0 20px;
  }
`;

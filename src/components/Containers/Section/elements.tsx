import styled from "styled-components";
import type { SectionContainerProps } from "./SectionContainer";

export const SectionContainer = styled("section")`
  display: flex;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  padding: 0 40px;
  margin-bottom: 80px;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 0 20px;
    margin-bottom: 40px;
  }
`;

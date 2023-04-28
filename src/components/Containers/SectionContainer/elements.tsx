import styled from "styled-components";

export const SectionContainer = styled("section")`
  display: flex;
  max-width: 1360px;
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    max-width: 320px;
  }
`;

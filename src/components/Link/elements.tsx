import styled from "styled-components";
import { LinkProps } from "./Link";

export const Link = styled("a")`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.link};

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

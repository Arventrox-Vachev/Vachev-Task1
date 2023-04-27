import styled from "styled-components";
import { LinkProps } from "./Link";

export const Link = styled("a")`
  color: ${({ theme }) => theme.colors.link};
  font-family: "Barlow", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

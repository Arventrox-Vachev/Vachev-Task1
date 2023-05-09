import styled from "styled-components";

export const Label = styled("label")`
  font-family: "Barlow", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 140%;

  > span {
    color: ${({ theme }) => theme.colors.yellow};
    text-decoration: underline;
  }
`;

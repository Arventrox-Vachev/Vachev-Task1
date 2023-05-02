import styled from "styled-components";

export const ImageWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    justify-content: flex-start;
  }
`;

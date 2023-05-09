import styled from "styled-components";

export const CardContainer = styled("div")`
  width: 100%;
  padding: 80px 0;

  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding: 40px 0 0;
  }
`;

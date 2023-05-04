import styled from "styled-components";

export const Card = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
`;

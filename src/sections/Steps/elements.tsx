import styled from "styled-components";
import { SectionContainer as _SectionContainer, H1 as _H1 } from "components";

export const SectionContainer = styled(_SectionContainer)`
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
`;

export const H1 = styled(_H1)`
  width: 100%;
  padding: 80px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};

  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
`;

export const StepsCardsWrapper = styled("div")`
  display: flex;
`;

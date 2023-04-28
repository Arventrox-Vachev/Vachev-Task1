import styled from "styled-components";
import { SectionContainer as _SectionContainer, H1 as _H1 } from "components";

export const SectionContainer = styled(({ ...props }) => (
  <_SectionContainer variant='primary' {...props} />
))`
  margin-bottom: 0;
`;

export const H1 = styled(_H1)`
  width: 100%;
  padding: 80px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 39px 47px;
    text-align: center;
  }
`;

export const StepsCardsWrapper = styled("div")`
  display: flex;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    flex-direction: column;
  }
`;

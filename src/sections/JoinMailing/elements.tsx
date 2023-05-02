import styled from "styled-components";
import { SectionContainer as _SectionContainer, Typography } from "components";
import { Logo as _Logo, JoinWaitingListForm as _JoinWaitingListForm } from "collections";

export const SectionContainer = styled(_SectionContainer)`
  flex-direction: column;
  align-items: center;
  padding: 80px 0;

  background-image: url(./imgs/Data.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 88px;
  background-position-y: -38px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 36px 0;
    background-position-y: -114px;
  }
`;

export const Title = styled(Typography.H1)`
  width: 100%;
  margin-bottom: 40px;
`;

export const JoinWaitingListForm = styled(props => (
  <_JoinWaitingListForm padding='20px' maxWidth='520px' {...props} />
))`
  @media ${({ theme }) => theme.breakpoint.max.S} {
    max-width: 320px;
  }
`;

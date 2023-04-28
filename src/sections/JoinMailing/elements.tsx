import styled from "styled-components";
import { SectionContainer as _SectionContainer, H1 as _H1 } from "components";
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

export const H1 = styled(_H1)`
  width: 100%;
  margin-bottom: 40px;
  text-align: center;
`;

export const JoinWaitingListForm = styled(props => (
  <_JoinWaitingListForm padding='20px' maxWidth='520px' {...props} />
))``;

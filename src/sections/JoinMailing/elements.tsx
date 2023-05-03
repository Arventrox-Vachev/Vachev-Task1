import styled from "styled-components";
import { SectionContainer as _SectionContainer, Typography } from "components";
import { JoinWaitingListForm as _JoinWaitingListForm } from "collections";

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

  //resets the color for the first word
  @media ${({ theme }) => theme.breakpoint.max.S} {
    > span {
      &:first-child {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const JoinWaitingListForm = styled(_JoinWaitingListForm)`
  max-width: 520px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 20px;
  }
`;

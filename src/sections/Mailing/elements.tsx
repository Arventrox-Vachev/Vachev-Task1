import styled from "styled-components";
import { SectionContainer as _SectionContainer, Typography } from "components";
import { JoinWaitingListForm as _JoinWaitingListForm } from "collections";

export const SectionContainer = styled(_SectionContainer)<{ bgImage: string }>`
  padding-top: 80px;
  flex-direction: column;
  align-items: center;

  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 88px;
  background-position-y: -40px;
  @media ${({ theme }) => theme.breakpoint.max.S} {
    margin-bottom: 32px;
    position: relative;
    top: -40px;
    background-position-y: -68px;
  }
`;

export const Heading = styled(Typography.H1)`
  width: 100%;
  margin-bottom: 40px;

  > span {
    color: ${({ theme }) => theme.colors.yellow};
  }

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

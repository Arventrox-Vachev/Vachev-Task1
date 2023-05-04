import styled from "styled-components";
import { SectionContainer as _SectionContainer, Typography } from "components";
import { JoinWaitingListForm as _JoinWaitingListForm } from "collections";

export const SectionContainer = styled(_SectionContainer)`
  margin-top: 33px;
  display: flex;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    flex-direction: column-reverse;
    margin-top: 0;
  }
`;
//
export const ItemsContainer = styled("div")`
  flex-basis: 501px;
  margin-right: auto;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    flex-basis: 100%;
    padding: 20px 60px 0;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 0;
    margin-top: 45px;
  }
`;

export const Title = styled(Typography.H1)`
  margin-bottom: 40px;
  text-align: left;

  > span {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    text-align: center;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding-right: 53px;
    margin-bottom: 17px;
    text-align: left;
  }
`;

export const SubHeading = styled(Typography.H3)`
  margin-bottom: 28px;
  font-weight: 300;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding-right: 45px;
  }
`;

export const ImageWrapper = styled("div")`
  display: flex;
  align-items: center;
  margin-top: 10px;

  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(31, 63, 112, 0.8) 0%,
    rgba(28, 47, 76, 0) 100%
  );

  @media ${({ theme }) => theme.breakpoint.max.S} {
    margin-top: 0;
  }
`;

export const JoinWaitingListForm = styled(_JoinWaitingListForm)`
  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin: 0 auto;
  }
`;

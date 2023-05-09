import styled from "styled-components";
import { SectionContainer as _SectionContainer, Typography } from "components";
import { JoinWaitingListForm as _JoinWaitingListForm } from "collections";

export const SectionContainer = styled(_SectionContainer)`
  padding-top: 32px;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding-top: 0;
    display: flex;
    flex-direction: column-reverse;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 0;
  }
`;

export const ItemsContainer = styled("div")`
  max-width: 500px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 0 20px;
  }
`;

export const Title = styled(Typography.H1)`
  margin-bottom: 40px;
  text-align: left;

  > span {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    margin-bottom: 20px;
    padding-right: 80px;
  }
`;

export const SubHeading = styled(Typography.H3)`
  margin-bottom: 28px;
  font-weight: 300;

  &:last-of-type {
    margin-bottom: 40px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding-right: 44px;
  }
`;

export const ImageWrapper = styled("div")`
  margin-left: auto;
  display: flex;
  align-items: center;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(31, 63, 112, 0.8) 0%,
    rgba(28, 47, 76, 0) 100%
  );

  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin: 0 auto;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    margin-bottom: 16px;
  }
`;

export const JoinWaitingListForm = styled(_JoinWaitingListForm)`
  @media ${({ theme }) => theme.breakpoint.max.M} {
    margin: 0 auto;
  }
`;

import styled from "styled-components";
import {
  SectionContainer as _SectionContainer,
  TextContainer as _TextContainer,
  Typography
} from "components";
import { JoinWaitingListForm as _JoinWaitingListForm } from "collections";

export const SectionContainer = styled(_SectionContainer).attrs({ variant: "secondary" })`
  background-image: url(./imgs/HERO.png);
  background-repeat: no-repeat;
  background-size: 78%;
  background-position-y: 2vw;
  background-position-x: 109%;

  @media ${({ theme }) => theme.breakpoint.max.L} {
    background-size: 85%;
    background-position-y: 50%;
    background-position-x: 130%;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    background-size: contain;
    background-position-y: 0;
    background-position-x: -12vw;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    background-size: 551px;
    background-position-y: -26px;
    background-position-x: max(-49vw, 100%);
    background-position-x: clamp(-177px, 78%, -75px);
  }
`;

export const TextContainer = styled(_TextContainer)`
  flex-direction: column;
  flex-basis: max(370px, 37%);
  margin-right: auto;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    flex-basis: 100%;
  }
`;

export const Title = styled(Typography.H1)`
  padding-bottom: 40px;
  text-align: left;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding-bottom: 23px;
    padding-right: 53px;
  }
`;

export const SubHeading = styled(Typography.H3)`
  padding-bottom: 28px;
  font-weight: 300;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    padding-right: 45px;
  }

  &:last-of-type {
    padding-bottom: 40px;
  }
`;

export const JoinWaitingListForm = styled(_JoinWaitingListForm)`
  max-width: 501px;
`;

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
  background-size: 1052px;
  background-position-y: -35%;
  background-position-x: 109%;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    background-size: 551px;
    background-position-y: -26px;
    background-position-x: -157px;
  }
`;

export const TextContainer = styled(_TextContainer)`
  flex-direction: column;
  flex-basis: 501px;
  margin-right: auto;
`;

export const Title = styled(Typography.H1)`
  padding-bottom: 40px;
  text-align: left;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding-bottom: 23px;
    padding-right: 53px;
  }
`;

export const SubHeading = styled(Typography.H3)`
  padding-bottom: 28px;
  font-weight: 300;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding-right: 45px;
  }

  &:last-of-type {
    padding-bottom: 40px;
  }
`;

export const JoinWaitingListForm = styled(_JoinWaitingListForm)`
  max-width: 501px;
`;

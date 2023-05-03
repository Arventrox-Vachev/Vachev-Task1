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
  background-size: min(75%, 1080px);
  background-position-y: 3.5vh;
  background-position-x: right;

  @media ${({ theme }) => theme.breakpoint.max.L} {
    background-size: 75%;
    background-position-y: 50%;
  }

  @media ${({ theme }) => theme.breakpoint.max.M} {
    background-size: clamp(600px, 130%, 950px);
    background-position-y: 0;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    background-size: 551px;
    background-position-y: -28px;
    background-position-x: clamp(-158px, 100%, 50px);
  }
`;

export const TextContainer = styled(_TextContainer)`
  flex-direction: column;
  flex-basis: max(370px, 37%);
  margin-right: auto;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    flex-basis: 100%;
    padding: 20px;
    text-align: center;
    align-items: center;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    text-align: left;
  }
`;

export const Title = styled(Typography.H1)`
  padding-bottom: 40px;
  text-align: left;

  @media ${({ theme }) => theme.breakpoint.max.M} {
    text-align: center;
  }
  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 0 53px 23px 0;
    text-align: left;
  }
`;

export const SubHeading = styled(Typography.H3)`
  padding-bottom: 28px;
  font-weight: 300;

  &:last-of-type {
    padding-bottom: 40px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding-right: 45px;
  }
`;

export const JoinWaitingListForm = styled(_JoinWaitingListForm)``;

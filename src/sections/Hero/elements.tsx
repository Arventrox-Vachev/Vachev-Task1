import styled from "styled-components";
import {
  SectionContainer as _SectionContainer,
  TextContainer as _TextContainer,
  Image as _Image,
  H1 as _H1,
  H3 as _H3
} from "components";
import { JoinWaitingListForm as _JoinWaitingListForm } from "collections";

export const SectionContainer = styled(_SectionContainer)`
  padding-top: 30px;
  padding-bottom: 80px;

  background-image: url(./imgs/HERO.png);
  background-repeat: no-repeat;
  background-size: 1052px;
  background-position-y: -35%;
  background-position-x: 109%;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    max-width: 360px;
    padding: 259px 20px 40px 20px;
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

export const H1 = styled(_H1)`
  padding-bottom: 40px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding-bottom: 23px;
    padding-right: 53px;
  }
`;

export const H3 = styled(_H3)`
  padding-bottom: 28px;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding-bottom: 0;
    padding-right: 45px;
  }

  &:last-of-type {
    padding-bottom: 40px;
  }
`;

export const JoinWaitingListForm = styled(_JoinWaitingListForm)``;

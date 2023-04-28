import styled from "styled-components";
import {
  Image as _Image,
  TextContainer as _TextContainer,
  H2 as _H2,
  Paragraph as _Paragraph
} from "components";

export const CardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  flex-basis: 33.333%;
  border-right: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 81px 60px 40px 60px;

  & ~ & {
    padding-left: 74px;
  }

  &:last-child {
    border: none;
    padding-left: 90px;
    padding-right: 32px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    /* padding: 55px 25px; */
    padding: 54px 24px 40px 24px;
    border: none;
    align-items: center;

    & ~ & {
      padding: 24px 24px 40px 24px;
    }

    &:last-child {
      padding: 24px 24px 40px 24px;
    }
  }
`;

export const Image = styled(_Image)``;

export const TextContainer = styled(_TextContainer)`
  display: flex;
  flex-direction: column;
  padding-right: 24px;

  > * {
    margin-bottom: 20px;
  }

  @media ${({ theme }) => theme.breakpoint.max.S} {
    padding: 0;
  }
`;

export const NumberWrapper = styled("div")`
  max-width: 40px;
  height: 40px;
  width: 100%;
  margin-top: 4px;

  background-color: #081831;
  color: #fcd130;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 16px;
  text-align: center;

  @media ${({ theme }) => theme.breakpoint.max.S} {
    margin-top: -7px;

    /* &:only-of-type && & ~ & {
      margin-bottom: 40px;
    } */

    /* &:not(:first-child) {
      margin-bottom: 100px;
    } */

    /* & + & {
      margin: 100px;
    } */
  }
`;

export const H2 = styled(_H2)`
  color: ${({ theme }) => theme.colors.yellow};
`;

export const HighlightedParagraph = styled(({ ...props }) => (
  <_Paragraph variant='sm' {...props} />
))`
  font-weight: 500;
`;

export const Paragraph = styled(({ ...props }) => <_Paragraph variant='sm' {...props} />)``;

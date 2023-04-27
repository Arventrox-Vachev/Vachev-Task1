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
`;

export const Image = styled(_Image)`
  width: fit-content;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const TextContainer = styled(_TextContainer)`
  display: flex;
  flex-direction: column;
  padding-right: 24px;

  > * {
    margin-bottom: 20px;
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
`;

export const H2 = styled(_H2)`
  color: ${({ theme }) => theme.colors.yellow};
`;

export const HighlightedParagraph = styled(({ ...props }) => (
  <_Paragraph variant='xs' {...props} />
))`
  font-weight: 500;
`;

export const Paragraph = styled(({ ...props }) => <_Paragraph variant='xs' {...props} />)``;

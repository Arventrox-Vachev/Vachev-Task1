import styled from "styled-components";
import {
  SectionContainer as _SectionContainer,
  TextContainer as _TextContainer,
  Image as _Image,
  H1 as _H1,
  H3 as _H3,
  HighlightedTextContainer as _HighlightedTextContainer
} from "components";

export const SectionContainer = styled(_SectionContainer)`
  padding-top: 30px;
  padding-bottom: 80px;

  background-image: url(./imgs/HERO.png);
  background-repeat: no-repeat;
  background-size: 1000px;
  background-position: right;
  background-position-y: -20%;
`;

export const TextContainer = styled(({ ...props }) => <_TextContainer {...props} />)`
  flex-direction: column;
  flex-basis: 501px;
  margin-right: auto;
`;

export const H1 = styled(({ ...props }) => <_H1 {...props} />)`
  padding-bottom: 40px;

  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
`;

export const H3 = styled(({ ...props }) => <_H3 {...props} />)`
  padding-bottom: 20px;

  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;

  &:last-of-type {
    padding-bottom: 40px;
  }
`;

export const HighlightedTextContainer = styled(({ ...props }) => (
  <_HighlightedTextContainer {...props} />
))``;

export const Image = styled(_Image)`
  scale: 1.2;
  z-index: 10;
`;

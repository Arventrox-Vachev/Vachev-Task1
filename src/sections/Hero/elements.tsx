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
  background-size: 1052px;
  background-position-y: -35%;
  background-position-x: 109%;
`;

export const TextContainer = styled(({ ...props }) => <_TextContainer {...props} />)`
  flex-direction: column;
  flex-basis: 501px;
  margin-right: auto;
`;

export const H1 = styled(({ ...props }) => <_H1 {...props} />)`
  padding-bottom: 40px;
`;

export const H3 = styled(({ ...props }) => <_H3 {...props} />)`
  padding-bottom: 28px;

  &:last-of-type {
    padding-bottom: 40px;
  }
`;

export const HighlightedTextContainer = styled(({ ...props }) => (
  <_HighlightedTextContainer {...props} />
))``;

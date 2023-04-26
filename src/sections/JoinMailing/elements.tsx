import styled from "styled-components";
import {
  SectionContainer as _SectionContainer,
  H1 as _H1,
  HighlightedTextContainer as _HighlightedTextContainer,
  Image as _Image
} from "components";

export const SectionContainer = styled(({ ...props }) => <_SectionContainer {...props} />)`
  flex-direction: column;
  align-items: center;
  padding: 80px 0;

  background-image: url(./imgs/Data.png);
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: 0px;
`;

export const H1 = styled(({ ...props }) => <_H1 {...props} />)`
  width: 100%;
  margin-bottom: 40px;

  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
`;
export const Image = styled(({ ...props }) => <_Image {...props} />)``;

export const HighlightedTextContainer = styled(({ ...props }) => (
  <_HighlightedTextContainer {...props} />
))``;

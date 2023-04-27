import styled from "styled-components";
import {
  SectionContainer as _SectionContainer,
  H1 as _H1,
  HighlightedTextContainer as _HighlightedTextContainer,
  Image as _Image
} from "components";
import { Logo as _Logo, JoinWaitingListForm as _JoinWaitingListForm } from "collections";

export const SectionContainer = styled(({ ...props }) => <_SectionContainer {...props} />)`
  flex-direction: column;
  align-items: center;
  padding: 80px 0;

  background-image: url(./imgs/Data.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 88px;
  background-position-y: -38px;
`;

export const H1 = styled(({ ...props }) => <_H1 {...props} />)`
  width: 100%;
  margin-bottom: 40px;
  text-align: center;
`;
export const Image = styled(({ ...props }) => <_Image {...props} />)``;

export const HighlightedTextContainer = styled(({ ...props }) => (
  <_HighlightedTextContainer {...props} />
))``;

export const JoinWaitingListForm = styled(props => (
  <_JoinWaitingListForm maxWidth='520px' {...props} />
))``;

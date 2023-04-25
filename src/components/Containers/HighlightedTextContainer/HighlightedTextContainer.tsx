import * as S from "./elements";

export interface HighlightedTextContainerProps extends HTMLSpanElement {}

export const HighlightedTextContainer = ({ ...props }) => {
  return <S.HighlightedTextContainer {...props} />;
};

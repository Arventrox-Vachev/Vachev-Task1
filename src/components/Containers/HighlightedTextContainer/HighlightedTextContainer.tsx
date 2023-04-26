import * as S from "./elements";
import { HTMLSpanProps } from "types";

export interface HighlightedTextContainerProps {}

export const HighlightedTextContainer = ({
  ...props
}: HighlightedTextContainerProps & HTMLSpanProps) => {
  return <S.HighlightedTextContainer {...props} />;
};

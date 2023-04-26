import * as S from "./elements";
import { HTMLDivProps } from "types";

export interface TextContainerProps {}

export const TextContainer = ({ ...props }: TextContainerProps & HTMLDivProps) => {
  return <S.TextContainer {...props} />;
};

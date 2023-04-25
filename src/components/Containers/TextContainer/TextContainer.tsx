import * as S from "./elements";

export interface TextContainerProps extends HTMLDivElement {}

export const TextContainer = ({ ...props }) => {
  return <S.TextContainer {...props} />;
};

import * as S from "./elements";

export interface LabelProps extends HTMLLabelElement {}

export const Label = ({ ...props }) => {
  return <S.Label {...props} />;
};

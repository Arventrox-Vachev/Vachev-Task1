import * as S from "./elements";
import { HTMLLabelProps } from "types";

export interface LabelProps {}

export const Label = ({ ...props }: LabelProps & HTMLLabelProps) => {
  return <S.Label {...props} />;
};

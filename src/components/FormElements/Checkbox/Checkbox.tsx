import * as S from "./elements";
import { HTMLInputProps } from "types";

export interface CheckboxProps {}

export const Checkbox = ({ ...props }: CheckboxProps & HTMLInputProps) => {
  return <S.Checkbox type='checkbox' {...props} />;
};

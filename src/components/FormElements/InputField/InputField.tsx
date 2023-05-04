import * as S from "./elements";
import { HTMLInputProps } from "types";

export interface InputFieldProps {}

export const InputField = ({ ...props }: InputFieldProps & HTMLInputProps) => {
  return <S.InputField type='text' {...props} />;
};

import * as S from "./elements";
import { useController, FieldValues, Control, Path } from "react-hook-form";
import type { HTMLInputProps } from "types";
import { ChangeEventHandler, useCallback } from "react";
import Image, { ImageProps } from "next/image";

export interface FormTextInputProps<T extends FieldValues = any>
  extends Omit<HTMLInputProps, "name" | "defaultValue"> {
  name: Path<T>;
  label?: string;
  control: Control<T, any>;
  validationImgs: { validImg: ImageProps; invalidImg: ImageProps };
}

export const FormInput = <T extends FieldValues = any>({
  name,
  control,
  label,
  className,
  disabled = false,
  maxLength,
  validationImgs: { invalidImg, validImg },
  ...props
}: FormTextInputProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields, isSubmitted }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "" as any
  });

  const validationImg = error ? value && invalidImg : value && validImg;

  return (
    <S.Container className={className}>
      <S.InputWrapper>
        {label && <S.Label htmlFor={name}>{label}</S.Label>}
        <S.InputField
          {...props}
          spellCheck={false}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          id={name}
          ref={ref}
          hasError={!!error}
          isSubmitted={isSubmitted}
        />
        {isSubmitted && (
          <S.ImageWrapper>
            <Image {...validationImg}></Image>
          </S.ImageWrapper>
        )}
      </S.InputWrapper>
      {error && <S.ErrorText>{error.message}</S.ErrorText>}
    </S.Container>
  );
};

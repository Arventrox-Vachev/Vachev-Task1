import * as S from "./elements";
import { useController, FieldValues, Control, Path } from "react-hook-form";
import type { HTMLInputProps } from "types";
import { ChangeEventHandler, useCallback } from "react";
import Image from "next/image";

export interface FormTextInputProps<T extends FieldValues = any>
  extends Omit<HTMLInputProps, "name" | "defaultValue"> {
  name: Path<T>;
  label?: string;
  validImg?: string;
  invalidImg?: string;
  control: Control<T, any>;
}

export const FormInput = <T extends FieldValues = any>({
  name,
  control,
  label,
  className,
  disabled = false,
  maxLength,
  validImg,
  invalidImg,
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
  let image: string | undefined;
  if (isSubmitted) image = error ? invalidImg : validImg;

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
        {image && (
          <S.ImageWrapper>
            <Image src={image} alt='validation-icon' width={24} height={24} />
          </S.ImageWrapper>
        )}
      </S.InputWrapper>
      {error && <S.ErrorText>{error.message}</S.ErrorText>}
    </S.Container>
  );
};

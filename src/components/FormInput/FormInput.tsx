import * as S from "./elements";
import { useController, FieldValues, Control, Path } from "react-hook-form";
import type { HTMLInputProps } from "types";
import { ChangeEventHandler, useCallback, useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";

export interface FormTextInputProps<T extends FieldValues = any>
  extends Omit<HTMLInputProps, "name" | "defaultValue"> {
  name: Path<T>;
  label?: string;
  control: Control<T, any>;
  validImg: ImageProps;
  invalidImg: ImageProps;
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
  const [image, setImage] = useState<ImageProps | null>(null);

  useEffect(() => {
    if (!isSubmitted) return;
    if (error) setImage(invalidImg);
    else setImage(validImg);
  }, [error, isSubmitted, validImg, invalidImg]);

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
            <Image {...image}></Image>
          </S.ImageWrapper>
        )}
      </S.InputWrapper>
      {error && <S.ErrorText>{error.message}</S.ErrorText>}
    </S.Container>
  );
};

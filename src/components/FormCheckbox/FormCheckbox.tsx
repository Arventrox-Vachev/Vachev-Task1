import * as S from "./elements";
import { HTMLInputProps } from "types";
import { useController, UseControllerProps, FieldValues, Control, Path } from "react-hook-form";

export interface FormCheckboxProps<T extends FieldValues = any>
  extends Omit<HTMLInputProps, "name" | "defaultValue"> {
  name: Path<T>;
  control: Control<T, any>;
  label?: string;
  desktopActiveImage: string;
  mobileActiveImage: string;
}

export const FormCheckbox = <T extends FieldValues = any>({
  name,
  control,
  label,
  desktopActiveImage,
  mobileActiveImage,
  ...props
}: FormCheckboxProps<T>) => {
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

  return (
    <S.Container {...props}>
      <S.InputWrapper>
        <S.Checkbox
          {...props}
          type='checkbox'
          spellCheck={false}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          id={name}
          ref={ref}
          hasError={!!error}
          isSubmitted={isSubmitted}
          desktopActiveImage={desktopActiveImage}
          mobileActiveImage={mobileActiveImage}
        />
        {label && <S.Label htmlFor={name} dangerouslySetInnerHTML={{ __html: label }} />}
      </S.InputWrapper>
      {error && <S.ErrorText>{error.message}</S.ErrorText>}
    </S.Container>
  );
};

FormCheckbox.displayName = "FormCheckbox";

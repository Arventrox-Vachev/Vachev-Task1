import * as S from "./elements";
import { useZodForm } from "hooks";
import { HTMLFormProps } from "types";
import { registerSchema } from "schemas";

export interface RegisterFormProps {
  heading: string;
  emailLabel: string;
  passwordLabel: string;
  emailHolder: string;
  passwordHolder: string;
  buttonText: string;
  validationImgs: { validImgSrc: string; invalidImgSrc: string };
}

export const RegisterForm = ({
  heading,
  emailLabel,
  passwordLabel,
  emailHolder,
  passwordHolder,
  buttonText,
  validationImgs,
  ...props
}: RegisterFormProps & HTMLFormProps) => {
  const { control, handleSubmit, formState, setValue, watch } = useZodForm(registerSchema, {
    email: "",
    password: ""
  });

  const submitHandler = handleSubmit(data => {
    console.log(data);
  });

  return (
    <S.Form onSubmit={submitHandler} {...props}>
      <S.Title dangerouslySetInnerHTML={{ __html: heading }} />
      <S.InputField
        label={emailLabel}
        placeholder={emailHolder}
        name='email'
        hideValidIndicator={false}
        control={control}
        {...validationImgs}
      />
      <S.InputField
        label={passwordLabel}
        placeholder={passwordHolder}
        type='password'
        name='password'
        hideValidIndicator={false}
        control={control}
        {...validationImgs}
      />
      <S.Button>{buttonText}</S.Button>
    </S.Form>
  );
};

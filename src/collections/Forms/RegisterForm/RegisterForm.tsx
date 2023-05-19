import * as S from "./elements";
import { useZodForm } from "hooks";
import { HTMLFormProps } from "types";
import { registerSchema } from "schemas";
import Image from "next/image";
import axios from "axios";

export interface RegisterFormProps {
  heading: string;
  nameLabel: string;
  emailLabel: string;
  passwordLabel: string;
  nameHolder: string;
  emailHolder: string;
  passwordHolder: string;
  buttonText: string;
  validationImgs: { validImgSrc: string; invalidImgSrc: string };
}

export const RegisterForm = ({
  heading,
  nameLabel,
  emailLabel,
  passwordLabel,
  nameHolder,
  emailHolder,
  passwordHolder,
  buttonText,
  validationImgs,
  setIsRegisterShown,
  ...props
}: RegisterFormProps &
  HTMLFormProps & { setIsRegisterShown: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { control, handleSubmit, formState, setValue, watch } = useZodForm(registerSchema, {
    name: "",
    email: "",
    password: "",
    image: "imgs/logo.png"
  });

  const submitHandler = handleSubmit(async data => {
    const { email, name, password, image } = data;

    try {
      const response = await axios.post("/api/register", {
        name,
        email,
        password,
        image
      });
      console.log(response.data);
      // Handle the response as needed
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  });

  return (
    <S.Form onSubmit={submitHandler} {...props}>
      <S.Container>
        <S.Title dangerouslySetInnerHTML={{ __html: heading }} />
        <S.CloseButton onClick={() => setIsRegisterShown(false)}>
          <Image src={validationImgs.invalidImgSrc} alt='close' width={24} height={24} />
        </S.CloseButton>
      </S.Container>
      <S.InputField
        label={nameLabel}
        placeholder={nameHolder}
        name={"name"}
        hideValidIndicator={false}
        control={control}
        {...validationImgs}
      />
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

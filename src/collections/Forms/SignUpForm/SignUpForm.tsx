import * as S from "./elements";
import Image from "next/image";
import axios from "axios";
import { useZodForm } from "hooks";
import { HTMLDivProps } from "types";
import { signUpSchema } from "schemas";

export interface SignUpProps {
  heading: string;
  nameLabel: string;
  emailLabel: string;
  passwordLabel: string;
  nameHolder: string;
  emailHolder: string;
  passwordHolder: string;
  buttonText: string;
  validationImgs: { validImgSrc: string; invalidImgSrc: string };
  successImgSrc: string;
  successHeading: string;
}

export const SignUpForm = ({
  heading,
  nameLabel,
  emailLabel,
  passwordLabel,
  nameHolder,
  emailHolder,
  passwordHolder,
  buttonText,
  validationImgs,
  successImgSrc,
  successHeading,
  setIsSignUpShown,
  ...props
}: SignUpProps &
  HTMLDivProps & { setIsSignUpShown: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { control, handleSubmit, formState, setValue, watch, setError } = useZodForm(signUpSchema, {
    name: "",
    email: "",
    password: "",
    matchPassword: "",
    image: "imgs/logo.png"
  });
  const { isSubmitSuccessful } = formState;

  const submitHandler = handleSubmit(async data => {
    const { email, name, password, matchPassword, image } = data;

    try {
      await axios.post("/api/createUser", {
        name,
        email,
        password,
        matchPassword,
        image
      });
    } catch (error: any) {
      console.error(error.response.data.message);
      setError("email", {
        type: "manual",
        message: error.response.data.message
      });
    }
  });

  return (
    <S.RegistrationContainer {...props}>
      {!isSubmitSuccessful ? (
        <S.Form onSubmit={submitHandler}>
          <S.Container>
            <S.Title dangerouslySetInnerHTML={{ __html: heading }} />
            <S.CloseButton onClick={() => setIsSignUpShown(false)}>
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
          <S.InputField
            label={"Confirm Password"}
            placeholder={passwordHolder}
            type='password'
            name='matchPassword'
            hideValidIndicator={false}
            control={control}
            {...validationImgs}
          />
          <S.Button>{buttonText}</S.Button>
        </S.Form>
      ) : (
        <S.SuccessContainer>
          <S.Title>{successHeading}</S.Title>
          <S.ImageWrapper>
            <Image src={successImgSrc} alt='success-image' width={97} height={73} />
          </S.ImageWrapper>
        </S.SuccessContainer>
      )}
    </S.RegistrationContainer>
  );
};

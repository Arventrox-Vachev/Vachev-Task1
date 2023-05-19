import * as S from "./elements";
import { useZodForm } from "hooks";
import { HTMLFormProps } from "types";
import { signInSchema } from "schemas";
import { signIn } from "next-auth/react";
import Image from "next/image";

export interface SignInFormProps {
  heading: string;
  emailLabel: string;
  passwordLabel: string;
  emailHolder: string;
  passwordHolder: string;
  buttonText: string;
  validationImgs: { validImgSrc: string; invalidImgSrc: string };
  googleImgSrc: string;
  discordImgSrc: string;
}

export const SignInForm = ({
  heading,
  emailLabel,
  passwordLabel,
  emailHolder,
  passwordHolder,
  buttonText,
  validationImgs,
  googleImgSrc,
  discordImgSrc,
  setIsSignInShown,
  ...props
}: SignInFormProps &
  HTMLFormProps & { setIsSignInShown: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { control, handleSubmit, formState, setValue, watch } = useZodForm(signInSchema, {
    signInEmail: "",
    signInPassword: ""
  });

  const submitHandler = handleSubmit(async data => {
    console.log(data);
    const { signInEmail, signInPassword } = data;
    signIn("credentials", { email: signInEmail, password: signInPassword, callbackUrl: "/test" });
  });

  return (
    <S.Form onSubmit={submitHandler} {...props}>
      <S.Container>
        <S.Title dangerouslySetInnerHTML={{ __html: heading }} />
        <S.CloseButton onClick={() => setIsSignInShown(false)}>
          <Image src={validationImgs.invalidImgSrc} alt='close' width={24} height={24} />
        </S.CloseButton>
      </S.Container>
      <S.InputField
        label={emailLabel}
        placeholder={emailHolder}
        name='signInEmail'
        hideValidIndicator={false}
        control={control}
        {...validationImgs}
      />
      <S.InputField
        label={passwordLabel}
        placeholder={passwordHolder}
        type='password'
        name='signInPassword'
        hideValidIndicator={false}
        control={control}
        {...validationImgs}
      />
      <S.Button>{buttonText}</S.Button>
      <S.Button
        onClick={e => {
          e.preventDefault();
          signIn("google");
        }}
      >
        Sign In with google
        <Image src={googleImgSrc} alt='google' width={20} height={20} />
      </S.Button>
      <S.Button
        onClick={e => {
          e.preventDefault();
          signIn("discord");
        }}
      >
        Sign In with discord
        <Image src={discordImgSrc} alt='discord' width={20} height={20} />
      </S.Button>
    </S.Form>
  );
};
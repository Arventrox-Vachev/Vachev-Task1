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
  const { control, handleSubmit, formState, setValue, watch, setError } = useZodForm(signInSchema, {
    signInEmail: "",
    signInPassword: ""
  });

  const submitHandler = handleSubmit(async data => {
    const { signInEmail, signInPassword } = data;
    try {
      const result = await signIn("credentials", {
        email: signInEmail,
        password: signInPassword,
        redirect: false
      });
      if (result?.error === "Email not found")
        setError("signInEmail", {
          type: "manual",
          message: result?.error
        });
      if (result?.error === "Invalid password")
        setError("signInPassword", {
          type: "manual",
          message: result?.error
        });
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  });

  return (
    <S.Form
      onSubmit={e => {
        e.preventDefault();
        submitHandler();
      }}
      {...props}
    >
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

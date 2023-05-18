import * as S from "./elements";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import type { HTMLHeaderProps } from "types";
import { LogoProps } from "collections/Logo";
import { RegisterFormProps, SignInFormProps } from "collections/Forms";

export interface HeaderProps {
  buttonsText: {
    login: string;
    logout: string;
    register: string;
  };
  logo: LogoProps;
  registerForm: RegisterFormProps;
  signInForm: SignInFormProps;
}

export const Header = ({
  buttonsText,
  logo,
  registerForm,
  signInForm,
  ...props
}: HeaderProps & HTMLHeaderProps) => {
  const [isRegisterShown, setIsRegisterShown] = useState(false);
  const [isSignInShown, setIsSignInShown] = useState(false);
  const { data: session } = useSession();

  console.log(session);

  return (
    <S.Header {...props}>
      <S.Logo {...logo} />

      {!session ? (
        <>
          <S.Button
            onClick={() => {
              setIsRegisterShown(!isRegisterShown);
              setIsSignInShown(false);
            }}
          >
            {buttonsText.register}
          </S.Button>
          <S.Button
            onClick={() => {
              setIsSignInShown(!isSignInShown);
              setIsRegisterShown(false);
            }}
          >
            {buttonsText.login}
          </S.Button>
          {isRegisterShown && (
            <S.RegisterForm setIsRegisterShown={setIsRegisterShown} {...registerForm} />
          )}
          {isSignInShown && <S.SignInForm setIsSignInShown={setIsSignInShown} {...signInForm} />}
        </>
      ) : (
        <S.Button onClick={() => signOut()}>{buttonsText.logout}</S.Button>
      )}
    </S.Header>
  );
};

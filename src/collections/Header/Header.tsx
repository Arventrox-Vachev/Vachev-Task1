import * as S from "./elements";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import type { HTMLHeaderProps } from "types";
import { LogoProps } from "collections/Logo";
import { SignUpProps, SignInFormProps } from "collections/Forms";

export interface HeaderProps {
  buttonsText: {
    login: string;
    logout: string;
    signUp: string;
  };
  logo: LogoProps;
  signUpForm: SignUpProps;
  signInForm: SignInFormProps;
}

export const Header = ({
  buttonsText,
  logo,
  signUpForm,
  signInForm,
  ...props
}: HeaderProps & HTMLHeaderProps) => {
  const [isSignUpShown, setIsSignUpShown] = useState(false);
  const [isSignInShown, setIsSignInShown] = useState(false);
  const { data: session } = useSession();

  // console.log(session);

  return (
    <S.Header {...props}>
      <S.Logo {...logo} />

      {!session ? (
        <>
          <S.Button
            onClick={() => {
              setIsSignUpShown(!isSignUpShown);
              setIsSignInShown(false);
            }}
          >
            {buttonsText.signUp}
          </S.Button>
          <S.Button
            onClick={() => {
              setIsSignInShown(!isSignInShown);
              setIsSignUpShown(false);
            }}
          >
            {buttonsText.login}
          </S.Button>
          {isSignUpShown && <S.SignUpForm setIsSignUpShown={setIsSignUpShown} {...signUpForm} />}
          {isSignInShown && <S.SignInForm setIsSignInShown={setIsSignInShown} {...signInForm} />}
        </>
      ) : (
        <S.Button onClick={() => signOut()}>{buttonsText.logout}</S.Button>
      )}
    </S.Header>
  );
};

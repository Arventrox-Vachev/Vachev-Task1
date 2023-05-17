import * as S from "./elements";
import type { HTMLHeaderProps } from "types";
import { LogoProps } from "collections/Logo";
import { signIn, signOut, useSession } from "next-auth/react";

export interface HeaderProps {
  buttonText: string;
  logo: LogoProps;
}

export const Header = ({ buttonText, logo, ...props }: HeaderProps & HTMLHeaderProps) => {
  const { data: session } = useSession();

  const isSignedHandler = async () => {
    if (session) signOut();
    else signIn();
  };

  return (
    <S.Header {...props}>
      <S.Logo {...logo} />
      <S.Button onClick={isSignedHandler}>{session ? "Logout" : buttonText}</S.Button>
    </S.Header>
  );
};

import * as S from "./elements";
import type { HTMLHeaderProps } from "types";
import { LogoProps } from "collections/Logo";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface HeaderProps {
  buttonText: string;
  logo: LogoProps;
}

export const Header = ({ buttonText, logo, ...props }: HeaderProps & HTMLHeaderProps) => {
  const { data: session } = useSession();
  const router = useRouter();
  console.log(session);

  const isSignedHandler = async () => {
    session ? signOut() : signIn();
    session && router.replace("/");
  };

  return (
    <S.Header {...props}>
      <S.Logo {...logo} />
      {!session && (
        <S.Button>
          <Link href='/register'>Register</Link>
        </S.Button>
      )}
      <S.Button onClick={isSignedHandler}>{session ? "Logout" : buttonText}</S.Button>
    </S.Header>
  );
};

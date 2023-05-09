import * as S from "./elements";
import type { HTMLHeaderProps } from "types";
import { LogoProps } from "collections/Logo";

export interface HeaderProps {
  buttonText: string;
  logo: LogoProps;
}

export const Header = ({ buttonText, logo, ...props }: HeaderProps & HTMLHeaderProps) => {
  return (
    <S.Header {...props}>
      <S.Logo {...logo} />
      <S.Button>{buttonText}</S.Button>
    </S.Header>
  );
};

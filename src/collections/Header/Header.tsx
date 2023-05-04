import * as S from "./elements";
import type { HTMLHeaderProps } from "types";
import { ImageProps } from "next/image";

export interface HeaderProps {
  buttonText: string;
  logo: {
    title: string;
    image: ImageProps;
  };
}

export const Header = ({ buttonText, logo, ...props }: HeaderProps & HTMLHeaderProps) => {
  return (
    <S.Header {...props}>
      <S.Logo {...logo} />
      <S.Button>{buttonText}</S.Button>
    </S.Header>
  );
};

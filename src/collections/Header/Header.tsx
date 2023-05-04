import * as S from "./elements";
import { ImageProps } from "next/image";
import type { HTMLHeaderProps } from "types";

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

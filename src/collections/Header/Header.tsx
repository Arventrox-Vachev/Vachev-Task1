import * as S from "./elements";
import type { HTMLHeaderProps } from "types";
import { storyblokEditable } from "@storyblok/react";
import { HeaderStoryblok } from "types";

export interface HeaderProps {
  blok: HeaderStoryblok;
}

export const Header = ({ blok, ...props }: HeaderProps & HTMLHeaderProps) => {
  const { buttonText, logo } = blok;

  return (
    <S.Header {...props} {...storyblokEditable(blok)} key={blok._uid}>
      <S.Logo blok={logo[0]} {...logo[0]} />
      <S.Button>{buttonText}</S.Button>
    </S.Header>
  );
};

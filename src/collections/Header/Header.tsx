import * as S from "./elements";
import type { HTMLHeaderProps, HeaderStoryblok } from "types";
import { storyblokEditable } from "@storyblok/react";

export interface HeaderProps extends HeaderStoryblok {}

export const Header = ({ headerProps, ...props }: HeaderProps & HTMLHeaderProps) => {
  const { buttonText, logo } = headerProps;

  return (
    <S.Header {...props} {...storyblokEditable(headerProps)}>
      <S.Logo {...logo[0]} />
      <S.Button>{buttonText}</S.Button>
    </S.Header>
  );
};

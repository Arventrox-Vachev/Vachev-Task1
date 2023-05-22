import * as S from "./elements";
import type { HTMLHeaderProps } from "types";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import { HeaderStoryblok } from "types";

export interface HeaderProps {
  headerProps: HeaderBlockData;
}

export interface HeaderBlockData extends HeaderStoryblok {}

export const Header = ({ headerProps, ...props }: HeaderProps & HTMLHeaderProps) => {
  const { buttonText, logo } = headerProps;

  return (
    <S.Header {...props} {...storyblokEditable(headerProps)}>
      <S.Logo {...logo[0]} />
      <S.Button>{buttonText}</S.Button>
    </S.Header>
  );
};

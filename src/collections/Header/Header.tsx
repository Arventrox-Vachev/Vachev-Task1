import * as S from "./elements";
import type { HTMLHeaderProps } from "types";
import { SbBlokData, storyblokEditable } from "@storyblok/react";

export interface HeaderProps {
  headerProps: SbBlokData;
}

export const Header = ({ headerProps, ...props }: HeaderProps & HTMLHeaderProps) => {
  const { buttonText, logo } = headerProps;

  return (
    <S.Header {...props} {...storyblokEditable(headerProps)}>
      {logo && <S.Logo {...logo[0]} />}
      <S.Button>{buttonText}</S.Button>
    </S.Header>
  );
};

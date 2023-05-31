import * as S from "./elements";
import Image from "next/image";
import { HTMLDivProps, LogoStoryblok } from "types";
import { storyblokEditable } from "@storyblok/react";

export interface LogoProps extends LogoStoryblok {}

export const Logo = ({ blok, text, image, ...props }: LogoProps & HTMLDivProps) => {
  return (
    <S.LogoContainer {...props} {...storyblokEditable(blok)}>
      <S.ImageWrapper>
        <Image src={image.filename} alt={image.alt} width={60} height={28} />
      </S.ImageWrapper>
      <S.Text>{text}</S.Text>
    </S.LogoContainer>
  );
};

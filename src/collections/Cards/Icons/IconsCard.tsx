import * as S from "./elements";
import Image from "next/image";
import { storyblokEditable } from "@storyblok/react";
import { HTMLDivProps, IconCardStoryblok } from "types";

export interface IconsCardProps extends IconCardStoryblok {
  blok: IconCardStoryblok;
}

export const IconsCard = ({ blok, ...props }: IconsCardProps & HTMLDivProps) => {
  const { heading, description, cardImage } = blok;
  return (
    <S.IconWrapper {...props} {...storyblokEditable(blok)}>
      <S.ImageWrapper>
        <Image src={cardImage.filename} alt={cardImage.alt} width={80} height={80} />
      </S.ImageWrapper>

      <S.TextContainer>
        <S.Heading>{heading}</S.Heading>
        <S.Description>{description}</S.Description>
      </S.TextContainer>
    </S.IconWrapper>
  );
};

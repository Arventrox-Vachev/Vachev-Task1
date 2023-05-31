import * as S from "./elements";
import Image from "next/image";
import { HTMLDivProps, FlywheelCardStoryblok } from "types";
import { storyblokEditable } from "@storyblok/react";

export interface FlywheelCardProps extends FlywheelCardStoryblok {
  blok: FlywheelCardStoryblok;
}

export const FlywheelCard = ({ blok, ...props }: FlywheelCardProps & HTMLDivProps) => {
  const { heading, description, cardImage } = blok;
  return (
    <S.FlywheelCardContainer {...props} {...storyblokEditable(blok)}>
      <S.ImageWrapper>
        <Image src={cardImage.filename} alt={cardImage.alt} width={102} height={102} />
      </S.ImageWrapper>

      <S.Heading>{heading}</S.Heading>
      <S.Description>{description}</S.Description>
    </S.FlywheelCardContainer>
  );
};

import * as S from "./elements";
import Image from "next/image";
import { HTMLDivProps, StepsCardStoryblok } from "types";
import { useMediaQuery } from "hooks";
import { storyblokEditable } from "@storyblok/react";

export interface StepsCardProps extends StepsCardStoryblok {
  blok: StepsCardStoryblok;
}

export const StepsCard = ({ blok, ...props }: StepsCardProps & HTMLDivProps) => {
  const [isSmallScreenDevice] = useMediaQuery({ type: "max", breakpoint: "S" });
  const { cardImage, description, desktopSubheading, heading, number, mobileSubheading } = blok;
  return (
    <S.StepsCardContainer {...props} {...storyblokEditable(blok)}>
      <S.ImageWrapper>
        <Image src={cardImage.filename} alt={cardImage.alt} width={193} height={197} />
      </S.ImageWrapper>

      <S.TextContainer>
        <S.NumberWrapper>{number}</S.NumberWrapper>
        <S.Heading>{heading}</S.Heading>
        <S.Subheading>
          {isSmallScreenDevice && mobileSubheading ? mobileSubheading : desktopSubheading}
        </S.Subheading>
        <S.Description>{description}</S.Description>
      </S.TextContainer>
    </S.StepsCardContainer>
  );
};

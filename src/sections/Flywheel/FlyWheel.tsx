import * as S from "./elements";
import Image from "next/image";
import { HTMLSectionProps, FlywheelSectionStoryblok } from "types";
import { storyblokEditable } from "@storyblok/react";

interface FlyWheelProps extends FlywheelSectionStoryblok {}

export const FlyWheel = ({ blok, ...props }: FlyWheelProps & HTMLSectionProps) => {
  const { heading, description, description2, flywheelImage, flywheelCards } = blok;

  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.CardContainer>
        <S.Heading dangerouslySetInnerHTML={{ __html: heading }} />

        <S.TextContainer>
          <S.Description>{description}</S.Description>
          <S.Description>{description2}</S.Description>
        </S.TextContainer>

        <S.FlywheelWrapper>
          {flywheelCards.map(cardProps => (
            <S.FlywheelCard key={cardProps._uid} {...cardProps} />
          ))}

          <S.ImageWrapper>
            <Image src={flywheelImage.filename} alt={flywheelImage.alt} width={551} height={551} />
          </S.ImageWrapper>
        </S.FlywheelWrapper>
      </S.CardContainer>
    </S.SectionContainer>
  );
};

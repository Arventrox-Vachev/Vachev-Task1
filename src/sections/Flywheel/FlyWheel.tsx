import * as S from "./elements";
import Image from "next/image";
import { HTMLSectionProps } from "types";
import { storyblokEditable, SbBlokData } from "@storyblok/react";
import { FlywheelCardProps } from "collections";

export interface FlyWheelProps {
  blok: FlywheelBlokData;
}

interface FlywheelBlokData extends SbBlokData {
  title: string;
  text: string;
  text2: string;
  flywheel_image: { alt: string; filename: string };
  flywheelCards: FlywheelCardProps[];
}

export const FlyWheel = ({ blok, ...props }: FlyWheelProps & HTMLSectionProps) => {
  const { title, text, text2, flywheel_image, flywheelCards } = blok;

  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.CardContainer>
        <S.Title dangerouslySetInnerHTML={{ __html: title }} />

        <S.TextContainer>
          <S.Text>{text}</S.Text>
          <S.Text>{text2}</S.Text>
        </S.TextContainer>

        <S.FlywheelWrapper>
          {flywheelCards.map(cardProps => (
            <S.FlywheelCard key={cardProps._uid} {...cardProps} />
          ))}

          <S.ImageWrapper>
            <Image
              src={flywheel_image.filename}
              alt={flywheel_image.alt}
              width={551}
              height={551}
            />
          </S.ImageWrapper>
        </S.FlywheelWrapper>
      </S.CardContainer>
    </S.SectionContainer>
  );
};

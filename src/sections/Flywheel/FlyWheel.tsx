import * as S from "./elements";
import Image from "next/image";
import { HTMLSectionProps } from "types";
import { storyblokEditable, SbBlokData } from "@storyblok/react";

export interface FlyWheelProps {
  blok: SbBlokData | any;
}

export const FlyWheel = ({ blok, ...props }: FlyWheelProps & HTMLSectionProps) => {
  const { title, text, text2, flywheel_image, flywheelCards } = blok;

  // console.log(flywheelCards);

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

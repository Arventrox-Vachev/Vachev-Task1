import * as S from "./elements";
import Image, { ImageProps } from "next/image";
import { HTMLSectionProps } from "types";

export interface FlyWheelProps {
  title: string;
  description: string[];
  cards: {
    title: string;
    description: string;
    image: ImageProps;
  }[];
  image: ImageProps;
}

export const FlyWheel = ({
  title,
  description,
  cards,
  image,
  ...props
}: FlyWheelProps & HTMLSectionProps) => {
  return (
    <S.SectionContainer {...props}>
      <S.Card>
        <S.Title dangerouslySetInnerHTML={{ __html: title }} />

        <S.TextContainer>
          {description.map((desc, index) => (
            <S.Text key={index}>{desc}</S.Text>
          ))}
        </S.TextContainer>

        <S.FlywheelWrapper>
          {cards.map((cardProps, index) => (
            <S.FlywheelCard key={index} {...cardProps} />
          ))}

          <S.ImageWrapper>
            <Image {...image} />
          </S.ImageWrapper>
        </S.FlywheelWrapper>
      </S.Card>
    </S.SectionContainer>
  );
};

import * as S from "./elements";
import Image, { ImageProps } from "next/image";
import { HTMLDivProps } from "types";

interface StepsCardProps {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  image: ImageProps;
}

export const StepsCard = ({
  number,
  title,
  subtitle,
  description,
  image,
  ...props
}: StepsCardProps & HTMLDivProps) => {
  return (
    <S.StepsCardContainer {...props}>
      <S.ImageWrapper>
        <Image {...image} />
      </S.ImageWrapper>

      <S.TextContainer>
        <S.NumberWrapper>{number}</S.NumberWrapper>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Text>{description}</S.Text>
      </S.TextContainer>
    </S.StepsCardContainer>
  );
};

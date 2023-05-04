import * as S from "./elements";
import Image, { ImageProps } from "next/image";
import { HTMLDivProps } from "types";

export interface IconCardProps {
  title: string;
  description: string;
  image: ImageProps;
}

export const IconCard = ({ title, description, image, ...props }: IconCardProps & HTMLDivProps) => {
  return (
    <S.IconWrapper {...props}>
      <S.ImageWrapper>
        <Image {...image} />
      </S.ImageWrapper>

      <S.TextContainer>
        <S.Title>{title}</S.Title>
        <S.Text>{description}</S.Text>
      </S.TextContainer>
    </S.IconWrapper>
  );
};

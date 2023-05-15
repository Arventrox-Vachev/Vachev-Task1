import * as S from "./elements";
import Image, { ImageProps } from "next/image";
import { HTMLDivProps } from "types";

export interface IconsCardProps {
  title: string;
  description: string;
  image: ImageProps | any;
}

export const IconsCard = ({
  title,
  description,
  image,
  ...props
}: IconsCardProps & HTMLDivProps) => {
  return (
    <S.IconWrapper {...props}>
      <S.ImageWrapper>
        <Image src={image.filename} alt={image.alt} width={80} height={80} />
      </S.ImageWrapper>

      <S.TextContainer>
        <S.Title>{title}</S.Title>
        <S.Text>{description}</S.Text>
      </S.TextContainer>
    </S.IconWrapper>
  );
};

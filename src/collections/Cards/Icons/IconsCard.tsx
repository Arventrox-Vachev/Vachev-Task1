import * as S from "./elements";
import Image, { ImageProps } from "next/image";
import { HTMLDivProps } from "types";

export interface IconsCardProps {
  heading: string;
  description: string;
  cardImage: ImageProps | any;
}

export const IconsCard = ({
  heading,
  description,
  cardImage,
  ...props
}: IconsCardProps & HTMLDivProps) => {
  return (
    <S.IconWrapper {...props}>
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

import * as S from "./elements";
import Image from "next/image";
import { HTMLDivProps, IconCardStoryblok } from "types";

export interface IconsCardProps extends IconCardStoryblok {}

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

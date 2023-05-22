import * as S from "./elements";
import Image from "next/image";
import { HTMLDivProps, FlywheelCardStoryblok } from "types";

export interface FlywheelCardProps extends FlywheelCardStoryblok {}

export const FlywheelCard = ({
  heading,
  description,
  cardImage,
  ...props
}: FlywheelCardProps & HTMLDivProps) => {
  return (
    <S.FlywheelCardContainer {...props}>
      <S.ImageWrapper>
        <Image src={cardImage.filename} alt={cardImage.alt} width={102} height={102} />
      </S.ImageWrapper>

      <S.Heading>{heading}</S.Heading>
      <S.Description>{description}</S.Description>
    </S.FlywheelCardContainer>
  );
};

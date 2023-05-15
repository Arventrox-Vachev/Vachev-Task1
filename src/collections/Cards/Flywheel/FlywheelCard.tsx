import * as S from "./elements";
import Image from "next/image";
import { HTMLDivProps } from "types";

export interface FlywheelCardProps {
  _uid: string;
  heading: string;
  description: string;
  cardImage: { alt: string; filename: string };
}

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

      <S.Title>{heading}</S.Title>
      <S.Text>{description}</S.Text>
    </S.FlywheelCardContainer>
  );
};

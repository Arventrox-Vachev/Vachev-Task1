import * as S from "./elements";
import Image, { ImageProps } from "next/image";
import { HTMLDivProps } from "types";

export interface FlywheelCardProps {
  title: string;
  description: string;
  image: ImageProps;
}

export const FlywheelCard = ({
  title,
  description,
  image,
  ...props
}: FlywheelCardProps & HTMLDivProps) => {
  return (
    <S.FlywheelCardContainer {...props}>
      <S.ImageWrapper>
        <Image {...image} />
      </S.ImageWrapper>
      <S.Title>{title}</S.Title>
      <S.Text>{description}</S.Text>
    </S.FlywheelCardContainer>
  );
};

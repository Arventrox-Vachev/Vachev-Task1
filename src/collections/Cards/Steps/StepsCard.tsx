import * as S from "./elements";
import Image, { ImageProps } from "next/image";
import { HTMLDivProps } from "types";
import { useMediaQuery } from "hooks";

export interface StepsCardProps {
  number: number;
  title: string;
  desktopSubtitle: string;
  mobileSubtitle?: string;
  description: string;
  image: ImageProps;
}

export const StepsCard = ({
  number,
  title,
  desktopSubtitle,
  mobileSubtitle,
  description,
  image,
  ...props
}: StepsCardProps & HTMLDivProps) => {
  const [isSmallScreenDevice] = useMediaQuery({ type: "max", breakpoint: "S" });
  const subtitle = isSmallScreenDevice && mobileSubtitle ? mobileSubtitle : desktopSubtitle;

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

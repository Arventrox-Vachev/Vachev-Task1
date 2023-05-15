import * as S from "./elements";
import Image, { ImageProps } from "next/image";
import { HTMLDivProps } from "types";
import { useMediaQuery } from "hooks";

export interface StepsCardProps {
  number: number;
  title: string;
  desktop_subtitle: string;
  mobileSubtitle?: string;
  description: string;
  image: ImageProps | any;
}

export const StepsCard = ({
  number,
  title,
  desktop_subtitle,
  mobileSubtitle,
  description,
  image,
  ...props
}: StepsCardProps & HTMLDivProps) => {
  const [isSmallScreenDevice] = useMediaQuery({ type: "max", breakpoint: "S" });
  const subtitle = isSmallScreenDevice && mobileSubtitle ? mobileSubtitle : desktop_subtitle;

  return (
    <S.StepsCardContainer {...props}>
      <S.ImageWrapper>
        <Image src={image.filename} alt={image.alt} width={193} height={197} />
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

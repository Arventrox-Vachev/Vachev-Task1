import * as S from "./elements";
import Image, { ImageProps } from "next/image";
import { HTMLDivProps } from "types";
import { useMediaQuery } from "hooks";

export interface StepsCardProps {
  _uid: string;
  number: number;
  heading: string;
  desktopSubheading: string;
  mobileSubHeading?: string;
  description: string;
  cardImage: ImageProps | any;
}

export const StepsCard = ({
  number,
  heading,
  desktopSubheading,
  mobileSubHeading,
  description,
  cardImage,
  ...props
}: StepsCardProps & HTMLDivProps) => {
  const [isSmallScreenDevice] = useMediaQuery({ type: "max", breakpoint: "S" });

  return (
    <S.StepsCardContainer {...props}>
      <S.ImageWrapper>
        <Image src={cardImage.filename} alt={cardImage.alt} width={193} height={197} />
      </S.ImageWrapper>

      <S.TextContainer>
        <S.NumberWrapper>{number}</S.NumberWrapper>
        <S.Heading>{heading}</S.Heading>
        <S.Subheading>
          {isSmallScreenDevice && mobileSubHeading ? mobileSubHeading : desktopSubheading}
        </S.Subheading>
        <S.Description>{description}</S.Description>
      </S.TextContainer>
    </S.StepsCardContainer>
  );
};

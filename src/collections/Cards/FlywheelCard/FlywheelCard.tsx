import * as S from "./elements";
import Image from "next/image";
import { useMediaQuery } from "hooks";

export interface FlywheelCardProps {
  key: number;
  card: {
    title: string;
    description: string;
    icon: {
      src: "string";
      alt: "string";
      width: number;
      height: number;
    };
  };
}

export const FlywheelCard = ({ card, ...props }: FlywheelCardProps) => {
  const [isSmallScreenDevice] = useMediaQuery({ type: "max", breakpoint: "S" });

  return (
    <S.TextContainer>
      {isSmallScreenDevice && (
        <S.ImageWrapper>
          <Image
            src={card.icon.src}
            alt={card.icon.alt}
            width={card.icon.width}
            height={card.icon.height}
          />
        </S.ImageWrapper>
      )}
      <S.H2>{card.title}</S.H2>
      <S.Paragraph>{card.description}</S.Paragraph>
    </S.TextContainer>
  );
};

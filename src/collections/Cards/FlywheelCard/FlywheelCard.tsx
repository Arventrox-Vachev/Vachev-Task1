import * as S from "./elements";
import Image from "next/image";
import { useMediaQuery } from "hooks";

export interface FlywheelCardProps {
  card: {
    title: string;
    description: string;
    icon: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
}

export const FlywheelCard = ({ card, ...props }: FlywheelCardProps) => {
  const [isSmallScreenDevice] = useMediaQuery({ type: "max", breakpoint: "S" });

  return (
    <S.CardWrapper {...props}>
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
      <S.Title>{card.title}</S.Title>
      <S.Text>{card.description}</S.Text>
    </S.CardWrapper>
  );
};

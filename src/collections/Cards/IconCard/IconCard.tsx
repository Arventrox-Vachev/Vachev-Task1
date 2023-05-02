import * as S from "./elements";
import Image from "next/image";

export interface IconCardProps {
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

export const IconCard = ({ card, ...props }: IconCardProps) => {
  return (
    <S.IconWrapper {...props}>
      <S.ImageWrapper>
        <Image
          src={card.icon.src}
          alt={card.icon.alt}
          width={card.icon.width}
          height={card.icon.height}
        />
      </S.ImageWrapper>

      <S.TextContainer>
        <S.Title>{card.title}</S.Title>
        <S.Text>{card.description}</S.Text>
      </S.TextContainer>
    </S.IconWrapper>
  );
};

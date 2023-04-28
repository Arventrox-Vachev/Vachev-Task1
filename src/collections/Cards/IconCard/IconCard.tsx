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
        <S.IconTitle>{card.title}</S.IconTitle>
        <S.IconParagraph>{card.description}</S.IconParagraph>
      </S.TextContainer>
    </S.IconWrapper>
  );
};

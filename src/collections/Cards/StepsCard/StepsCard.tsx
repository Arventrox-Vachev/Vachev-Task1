import * as S from "./elements";
import Image from "next/image";

interface StepsCardProps {
  card: {
    number: number;
    title: string;
    description: {
      highlighted: string;
      text: string;
    };
    icon: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
}

export const StepsCard = ({ card, ...props }: StepsCardProps) => {
  return (
    <S.CardContainer {...props}>
      <S.ImageWrapper>
        <Image
          src={card.icon.src}
          alt={card.icon.alt}
          width={card.icon.width}
          height={card.icon.height}
        />
      </S.ImageWrapper>
      <S.TextContainer>
        <S.NumberWrapper>{card.number}</S.NumberWrapper>
        <S.Title>{card.title}</S.Title>
        <S.HighlightedText>{card.description.highlighted}</S.HighlightedText>
        <S.Text>{card.description.text}</S.Text>
      </S.TextContainer>
    </S.CardContainer>
  );
};

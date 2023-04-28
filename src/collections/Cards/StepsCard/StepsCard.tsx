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
        <S.H2>{card.title}</S.H2>
        <S.HighlightedParagraph>{card.description.highlighted}</S.HighlightedParagraph>
        <S.Paragraph>{card.description.text}</S.Paragraph>
      </S.TextContainer>
    </S.CardContainer>
  );
};

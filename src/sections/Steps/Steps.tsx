import * as S from "./elements";
import { ImageProps } from "next/image";
import { HTMLSectionProps } from "types";

export interface StepsProps {
  title: string;
  cards: {
    number: number;
    title: string;
    subtitle: string;
    description: string;
    image: ImageProps;
  }[];
}

export const Steps = ({ title, cards, ...props }: StepsProps & HTMLSectionProps) => {
  return (
    <S.SectionContainer {...props}>
      <S.CardContainer>
        <S.Title dangerouslySetInnerHTML={{ __html: title }} />

        <S.StepsCardsWrapper>
          {cards.map((cardProps, index) => (
            <S.StepsCard key={index} {...cardProps} />
          ))}
        </S.StepsCardsWrapper>
      </S.CardContainer>
    </S.SectionContainer>
  );
};

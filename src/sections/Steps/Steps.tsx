import * as S from "./elements";
import { HTMLSectionProps } from "types";
import { StepsCardProps } from "collections";

export interface StepsProps {
  title: string;
  cards: StepsCardProps[];
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

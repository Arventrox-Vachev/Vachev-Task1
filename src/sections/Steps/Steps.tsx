import * as S from "./elements";
import { HTMLSectionProps } from "types";
import { storyblokEditable, SbBlokData } from "@storyblok/react";
import { StepsCardProps } from "collections";

export interface StepsProps {
  blok: StepsBlokData;
}

interface StepsBlokData extends SbBlokData {
  heading: string;
  stepsCards: StepsCardProps[];
}

export const Steps = ({ blok, ...props }: StepsProps & HTMLSectionProps) => {
  const { heading, stepsCards } = blok;

  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.CardContainer>
        <S.Heading dangerouslySetInnerHTML={{ __html: heading }} />

        <S.StepsCardsWrapper>
          {stepsCards.map(cardProps => (
            <S.StepsCard key={cardProps._uid} {...cardProps} />
          ))}
        </S.StepsCardsWrapper>
      </S.CardContainer>
    </S.SectionContainer>
  );
};

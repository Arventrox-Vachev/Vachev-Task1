import * as S from "./elements";
import { iconsContent } from "data";
import { IconCard } from "collections";

export const Icons = () => {
  return (
    <S.SectionContainer>
      <S.H1>
        {iconsContent.title.firstPart}
        <S.HighlightedTextContainer>{iconsContent.title.highlighted}</S.HighlightedTextContainer>
        {iconsContent.title.lastPart}
      </S.H1>

      <S.IconsWrapper>
        {iconsContent.cards.map((card, index) => (
          <IconCard key={index} card={card} />
        ))}
      </S.IconsWrapper>
    </S.SectionContainer>
  );
};

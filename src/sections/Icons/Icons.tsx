import * as S from "./elements";
import { iconsContent } from "data";

export interface IconsProps {}

export const Icons = ({ ...props }: IconsProps) => {
  return (
    <S.SectionContainer>
      <S.H1 dangerouslySetInnerHTML={{ __html: iconsContent.title }} />

      <S.IconsWrapper>
        {iconsContent.cards.map((card, index) => (
          <S.IconCard key={index} card={card} />
        ))}
      </S.IconsWrapper>
    </S.SectionContainer>
  );
};

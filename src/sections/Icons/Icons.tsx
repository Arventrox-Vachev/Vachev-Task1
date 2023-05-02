import * as S from "./elements";
import { useMediaQuery } from "hooks";
import { iconsContent } from "data";

export interface IconsProps {}

export const Icons = ({ ...props }: IconsProps) => {
  const [isSmallScreenDevice] = useMediaQuery({ type: "max", breakpoint: "S" });

  return (
    <S.SectionContainer>
      {!isSmallScreenDevice && <S.Title dangerouslySetInnerHTML={{ __html: iconsContent.title }} />}
      {isSmallScreenDevice && (
        <S.Title dangerouslySetInnerHTML={{ __html: iconsContent.mobileTitle }} />
      )}

      <S.IconsWrapper>
        {iconsContent.cards.map((card, index) => (
          <S.IconCard key={index} card={card} />
        ))}
      </S.IconsWrapper>
    </S.SectionContainer>
  );
};

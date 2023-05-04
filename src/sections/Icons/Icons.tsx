import * as S from "./elements";
import { useMediaQuery } from "hooks";
import { ImageProps } from "next/image";

export interface IconsProps {
  title: string;
  mobileTitle: string;
  cards: {
    title: string;
    description: string;
    image: ImageProps;
  }[];
}

export const Icons = ({ title, mobileTitle, cards, ...props }: IconsProps) => {
  const [isSmallScreenDevice] = useMediaQuery({ type: "max", breakpoint: "S" });
  const sectionTitle = isSmallScreenDevice ? mobileTitle : title;
  return (
    <S.SectionContainer {...props}>
      <S.Card>
        <S.Title dangerouslySetInnerHTML={{ __html: sectionTitle }} />

        <S.IconsContainer>
          {cards.map((cardProps, index) => (
            <S.IconCard key={index} {...cardProps} />
          ))}
        </S.IconsContainer>
      </S.Card>
    </S.SectionContainer>
  );
};

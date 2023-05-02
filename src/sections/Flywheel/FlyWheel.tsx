import * as S from "./elements";
import Image from "next/image";
import { flywheelContent } from "data";

export interface FlyWheelProps {}

export const FlyWheel = ({ ...props }: FlyWheelProps) => {
  return (
    <S.SectionContainer>
      <S.Title dangerouslySetInnerHTML={{ __html: flywheelContent.title }} />

      <S.TextContainer>
        {flywheelContent.description.map((desc, index) => (
          <S.Text key={index}>{desc}</S.Text>
        ))}
      </S.TextContainer>

      <S.FlywheelWrapper>
        {flywheelContent.cards.map((card, index) => (
          <S.FlywheelCard key={index} card={card} />
        ))}

        <S.ImageWrapper>
          <Image
            src={flywheelContent.flywheelImg.src}
            alt={flywheelContent.flywheelImg.alt}
            width={flywheelContent.flywheelImg.width}
            height={flywheelContent.flywheelImg.height}
          />
        </S.ImageWrapper>
      </S.FlywheelWrapper>
    </S.SectionContainer>
  );
};

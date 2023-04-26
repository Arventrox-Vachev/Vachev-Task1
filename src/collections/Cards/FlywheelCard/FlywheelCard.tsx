import * as S from "./elements";

export interface FlywheelCardProps {
  key: number;
  card: {
    title: string;
    description: string;
  };
}

export const FlywheelCard = ({ card }: FlywheelCardProps) => {
  return (
    <S.TextContainer>
      <S.H2>{card.title}</S.H2>
      <S.Paragraph>{card.description}</S.Paragraph>
    </S.TextContainer>
  );
};

import * as S from "./elements";
import { HTMLDivProps } from "types";

export interface CardProps {}

export const Card = ({ ...props }: CardProps & HTMLDivProps) => {
  return <S.Card {...props} />;
};

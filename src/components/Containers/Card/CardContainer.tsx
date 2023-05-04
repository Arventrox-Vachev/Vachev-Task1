import * as S from "./elements";
import { HTMLDivProps } from "types";

export interface CardContainerProps {}

export const CardContainer = ({ ...props }: CardContainerProps & HTMLDivProps) => {
  return <S.CardContainer {...props} />;
};

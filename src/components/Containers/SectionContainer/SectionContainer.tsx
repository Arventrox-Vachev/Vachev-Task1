import * as S from "./elements";
import { HTMLDivProps } from "types";

export interface SectionContainerProps {}

export const SectionContainer = ({ ...props }: SectionContainerProps & HTMLDivProps) => (
  <S.SectionContainer {...props} />
);

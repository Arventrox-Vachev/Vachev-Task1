import * as S from "./elements";
import { HTMLSectionProps } from "types";

export interface SectionContainerProps {}

export const SectionContainer = ({ ...props }: SectionContainerProps & HTMLSectionProps) => (
  <S.SectionContainer {...props} />
);

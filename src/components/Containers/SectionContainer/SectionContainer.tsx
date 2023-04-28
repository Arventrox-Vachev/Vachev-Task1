import * as S from "./elements";
import { HTMLDivProps } from "types";

export interface SectionContainerProps {
  variant?: "primary" | "secondary";
}

export const SectionContainer = ({ ...props }: SectionContainerProps & HTMLDivProps) => (
  <S.SectionContainer {...props} />
);

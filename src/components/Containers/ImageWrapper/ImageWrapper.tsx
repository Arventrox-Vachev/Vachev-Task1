import { HTMLDivProps } from "types";
import * as S from "./elements";

export interface NextImageProps {}

export const ImageWrapper = ({ ...props }: NextImageProps & HTMLDivProps) => {
  return <S.ImageWrapper {...props} />;
};

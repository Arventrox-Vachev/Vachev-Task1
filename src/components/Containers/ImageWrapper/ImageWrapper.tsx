import * as S from "./elements";
import { HTMLDivProps } from "types";

export interface NextImageProps {}

export const ImageWrapper = ({ ...props }: NextImageProps & HTMLDivProps) => {
  return <S.ImageWrapper {...props} />;
};

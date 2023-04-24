import * as S from "./elements";
import { ImageProps } from "next/image";

export interface NextImageProps extends ImageProps {}

export const Image = ({ ...props }: NextImageProps) => {
  return <S.NextImage {...props} />;
};

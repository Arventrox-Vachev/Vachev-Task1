import * as S from "./elements";
import { HTMLDivProps } from "types";
import { ImageProps } from "next/image";

export interface NextImageProps {}

export const Image = ({ ...props }: NextImageProps & HTMLDivProps & ImageProps) => {
  return (
    <S.ImageContainer {...props}>
      <S.NextImage {...props} />
    </S.ImageContainer>
  );
};

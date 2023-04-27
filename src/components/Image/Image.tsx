import * as S from "./elements";
import { ImageProps } from "next/image";

export interface NextImageProps {}

export const Image = ({ ...props }: NextImageProps & ImageProps) => {
  return (
    <S.ImageContainer {...props}>
      <S.NextImage {...props} />
    </S.ImageContainer>
  );
};

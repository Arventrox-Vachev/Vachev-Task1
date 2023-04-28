import * as S from "./elements";
import { ImageProps } from "next/image";

export interface NextImageProps {
  minWidth?: number;
}

export const Image = ({ minWidth, ...props }: NextImageProps & ImageProps) => {
  return (
    <S.ImageContainer minWidth={minWidth}>
      <S.NextImage {...props} />
    </S.ImageContainer>
  );
};

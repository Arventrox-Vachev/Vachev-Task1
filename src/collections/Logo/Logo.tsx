import * as S from "./elements";
import Image, { ImageProps } from "next/image";
import { HTMLDivProps } from "types";

export interface LogoProps {
  title: string;
  image: ImageProps;
}

export const Logo = ({ title, image, ...props }: LogoProps & HTMLDivProps) => {
  return (
    <S.LogoContainer {...props}>
      <S.ImageWrapper>
        <Image {...image} />
      </S.ImageWrapper>
      <S.LogoText>{title}</S.LogoText>
    </S.LogoContainer>
  );
};

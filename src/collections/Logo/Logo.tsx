import * as S from "./elements";
import Image, { ImageProps } from "next/image";
import { HTMLDivProps } from "types";

export interface LogoProps {
  text: string;
  image: { alt: string; filename: string };
}

export const Logo = ({ text, image, ...props }: LogoProps & HTMLDivProps) => {
  return (
    <S.LogoContainer {...props}>
      <S.ImageWrapper>
        <Image src={image.filename} alt={image.alt} width={60} height={28} />
      </S.ImageWrapper>
      <S.Text>{text}</S.Text>
    </S.LogoContainer>
  );
};

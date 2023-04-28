import * as S from "./elements";
import { logoContent } from "data";
import Image from "next/image";

export interface LogoProps {}

export const Logo = ({ ...props }: LogoProps) => {
  return (
    <S.LogoWrapper {...props}>
      <S.ImageWrapper>
        <Image
          src={logoContent.src}
          alt={logoContent.alt}
          width={logoContent.width}
          height={logoContent.height}
        />
      </S.ImageWrapper>
      <S.LogoText {...props}>{logoContent.logoText}</S.LogoText>
    </S.LogoWrapper>
  );
};

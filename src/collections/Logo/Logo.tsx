import * as S from "./elements";
import Image from "next/image";
import { logoContent } from "data";

export interface LogoProps {}

export const Logo = ({ ...props }: LogoProps) => {
  return (
    <S.LogoContainer {...props}>
      <S.ImageWrapper>
        <Image
          src={logoContent.src}
          alt={logoContent.alt}
          width={logoContent.width}
          height={logoContent.height}
        />
      </S.ImageWrapper>
      <S.LogoText {...props}>{logoContent.logoText}</S.LogoText>
    </S.LogoContainer>
  );
};

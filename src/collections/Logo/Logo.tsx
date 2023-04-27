import * as S from "./elements";
import { logoContent } from "data";

export interface LogoProps {}

export const Logo = ({ ...props }: LogoProps) => {
  return (
    <S.LogoContainer>
      <S.Image
        src={logoContent.src}
        alt={logoContent.alt}
        width={logoContent.width}
        height={logoContent.height}
      />
      <S.LogoText>{logoContent.logoText}</S.LogoText>
    </S.LogoContainer>
  );
};

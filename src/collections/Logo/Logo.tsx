import * as S from "./elements";
import { logoContent } from "data";

export interface LogoProps {}

export const Logo = ({ ...props }: LogoProps) => {
  return (
    <S.LogoWrapper {...props}>
      <S.Image
        src={logoContent.src}
        alt={logoContent.alt}
        width={logoContent.width}
        height={logoContent.height}
      />
      <S.LogoText {...props}>{logoContent.logoText}</S.LogoText>
    </S.LogoWrapper>
  );
};

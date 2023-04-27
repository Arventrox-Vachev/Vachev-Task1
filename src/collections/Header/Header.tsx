import * as S from "./elements";
import type { HTMLHeaderProps } from "types";
import { headerContent } from "data";

export interface HeaderProps {}

export const Header = ({ ...props }: HeaderProps & HTMLHeaderProps) => {
  return (
    <S.Header {...props}>
      <S.Logo {...props} />
      <S.Button>{headerContent.buttonText}</S.Button>
    </S.Header>
  );
};

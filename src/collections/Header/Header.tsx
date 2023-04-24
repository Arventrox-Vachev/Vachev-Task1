import * as S from "./elements";
import type { HTMLHeaderProps } from "types";
import { headerContent } from "data";

export interface HeaderProps extends HTMLHeaderProps {}

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <S.Header {...props}>
      <S.Logo {...props} />
      <S.Button>{headerContent.buttonText}</S.Button>
    </S.Header>
  );
};

import * as S from "./elements";

export interface LinkProps {}

export const Link = ({ ...props }: LinkProps) => {
  return <S.Link {...props} />;
};

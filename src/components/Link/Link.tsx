import { HTMLAnchorProps } from "types";
import * as S from "./elements";

export interface LinkProps {}

export const Link = ({ ...props }: LinkProps & HTMLAnchorProps) => {
  return <S.Link {...props} />;
};

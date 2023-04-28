import * as S from "./elements";
import { HTMLAnchorProps } from "types";

export interface LinkProps {}

export const Link = ({ ...props }: LinkProps & HTMLAnchorProps) => {
  return <S.Link {...props} />;
};

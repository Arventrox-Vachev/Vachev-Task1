import * as S from "./elements";
import { HTMLAnchorProps } from "types";

export interface AnchorLinkProps {}

export const AnchorLink = ({ ...props }: AnchorLinkProps & HTMLAnchorProps) => {
  return <S.AnchorLink {...props} />;
};

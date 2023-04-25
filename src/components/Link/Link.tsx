import * as S from "./elements";

export interface LinkProps extends HTMLLinkElement {}

export const Link = ({ ...props }) => {
  return <S.Link {...props} />;
};

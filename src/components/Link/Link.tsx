import * as S from "./elements";
import Link, { LinkProps as _LinkProps } from "next/link";

export interface LinkProps {
  children: string;
}

export const NextLink = ({ href, children, ...props }: LinkProps & _LinkProps) => {
  return (
    <Link href={href} passHref {...props}>
      <S.NextLink>{children}</S.NextLink>
    </Link>
  );
};

import * as S from "./elements";
import type { HTMLHeaderProps } from "types";
import { LogoProps } from "collections/Logo";
import { initialize } from "hooks/react-query-api-hooks";
import axios from "axios";

export interface HeaderProps {
  buttonText: string;
  logo: LogoProps;
}

const instance = axios.create({
  baseURL: "https:/localhost:3000/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});

const rapini = initialize(instance);

const { queries, mutations, requests } = rapini;

export const Header = ({ buttonText, logo, ...props }: HeaderProps & HTMLHeaderProps) => {
  const id = 1;
  const { data } = queries.useGetPetById(id);
  console.log(data);

  return (
    <S.Header {...props}>
      <S.Logo {...logo} />
      <S.Button>{buttonText}</S.Button>
    </S.Header>
  );
};

import * as S from "./elements";
import { mailingListContent } from "data";

export interface JoinMailingProps {}

export const JoinMailing = ({ ...props }: JoinMailingProps) => {
  return (
    <S.SectionContainer>
      <S.H1 dangerouslySetInnerHTML={{ __html: mailingListContent.title }} />
      <S.JoinWaitingListForm />
    </S.SectionContainer>
  );
};

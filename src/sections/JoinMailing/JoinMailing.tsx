import * as S from "./elements";
import { HTMLSectionProps } from "types";

export interface JoinMailingProps {
  title: string;
}

export const JoinMailing = ({ title, ...props }: JoinMailingProps & HTMLSectionProps) => {
  return (
    <S.SectionContainer {...props}>
      <S.Title dangerouslySetInnerHTML={{ __html: title }} />
      <S.JoinWaitingListForm />
    </S.SectionContainer>
  );
};

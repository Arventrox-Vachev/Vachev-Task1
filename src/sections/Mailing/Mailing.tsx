import * as S from "./elements";
import { HTMLSectionProps } from "types";

export interface MailingProps {
  title: string;
  joinWaitingListFormProps: {
    title: string;
    emailHolder: string;
    buttonText: string;
    policiesText: string[];
  };
}

export const Mailing = ({
  title,
  joinWaitingListFormProps,
  ...props
}: MailingProps & HTMLSectionProps) => {
  return (
    <S.SectionContainer {...props}>
      <S.Title dangerouslySetInnerHTML={{ __html: title }} />
      <S.JoinWaitingListForm {...joinWaitingListFormProps} />
    </S.SectionContainer>
  );
};

import * as S from "./elements";
import { HTMLSectionProps } from "types";
import { JoinWaitingListFormProps } from "collections";
import Image from "next/image";

export interface MailingProps {
  title: string;
  joinWaitingListFormProps: JoinWaitingListFormProps;
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

import * as S from "./elements";
import { HTMLSectionProps } from "types";
import { storyblokEditable, SbBlokData } from "@storyblok/react";
import { JoinWaitingListFormProps } from "collections";

export interface MailingProps {
  blok: MailingBlockData;
}

interface MailingBlockData extends SbBlokData {
  title: string;
  joinWaitingListForm: JoinWaitingListFormProps;
}
export const Mailing = ({ blok, ...props }: MailingProps & HTMLSectionProps) => {
  const { title, joinWaitingListForm } = blok;
  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.Title dangerouslySetInnerHTML={{ __html: title }} />
      <S.JoinWaitingListForm {...joinWaitingListForm[0]} />
    </S.SectionContainer>
  );
};

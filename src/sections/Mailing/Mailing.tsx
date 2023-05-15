import * as S from "./elements";
import { HTMLSectionProps } from "types";
import { storyblokEditable, SbBlokData } from "@storyblok/react";

export interface MailingProps {
  blok: SbBlokData | any;
}

export const Mailing = ({ blok, ...props }: MailingProps & HTMLSectionProps) => {
  const { title, joinWaitingListForm } = blok;
  return (
    <S.SectionContainer {...props} {...storyblokEditable(blok)}>
      <S.Title dangerouslySetInnerHTML={{ __html: title }} />
      <S.JoinWaitingListForm joinWaitingListForm={joinWaitingListForm} />
    </S.SectionContainer>
  );
};

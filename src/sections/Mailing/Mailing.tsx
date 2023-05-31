import * as S from "./elements";
import { HTMLSectionProps } from "types";
import { storyblokEditable, SbBlokData } from "@storyblok/react";
import { JoinWaitingListFormProps } from "collections";

export interface MailingProps {
  blok: MailingBlockData;
}

interface MailingBlockData extends SbBlokData {
  heading: string;
  backgroundImage: { filename: string };
  joinWaitingListForm: JoinWaitingListFormProps;
}
export const Mailing = ({ blok, ...props }: MailingProps & HTMLSectionProps) => {
  const { heading, backgroundImage, joinWaitingListForm } = blok;

  return (
    <S.SectionContainer
      backgroundImage={backgroundImage.filename}
      {...props}
      {...storyblokEditable(blok)}
    >
      <S.Heading dangerouslySetInnerHTML={{ __html: heading }} />
      <S.JoinWaitingListForm {...joinWaitingListForm[0]} />
    </S.SectionContainer>
  );
};

import * as S from "./elements";
import { HTMLSectionProps, MailingSectionStoryblok } from "types";
import { storyblokEditable } from "@storyblok/react";

export interface MailingProps extends MailingSectionStoryblok {}

export const Mailing = ({ blok, ...props }: MailingProps & HTMLSectionProps) => {
  const { heading, backgroundImage, joinWaitingListForm } = blok;

  return (
    <S.SectionContainer bgImage={backgroundImage.filename} {...props} {...storyblokEditable(blok)}>
      <S.Heading dangerouslySetInnerHTML={{ __html: heading }} />
      {joinWaitingListForm.map(props => (
        <S.JoinWaitingListForm key={props._uid} blok={props} {...props} />
      ))}
    </S.SectionContainer>
  );
};

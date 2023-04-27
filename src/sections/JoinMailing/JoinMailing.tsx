import * as S from "./elements";
import { mailingListContent } from "data";

export const JoinMailing = () => {
  return (
    <S.SectionContainer>
      <S.Image />
      <S.H1>
        <S.HighlightedTextContainer>
          {mailingListContent.title.firstHighlighted}
        </S.HighlightedTextContainer>
        {mailingListContent.title.text}
        <S.HighlightedTextContainer>
          {mailingListContent.title.secondHighlighted}
        </S.HighlightedTextContainer>
      </S.H1>
      <S.JoinWaitingListForm />
    </S.SectionContainer>
  );
};

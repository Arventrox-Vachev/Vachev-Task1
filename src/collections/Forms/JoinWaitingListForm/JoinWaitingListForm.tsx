import * as S from "./elements";
import { joinWaitingListFormContent } from "data";

export interface JoinWaitingListFormProps {}

export const JoinWaitingListForm = ({ ...props }: JoinWaitingListFormProps) => {
  return (
    <S.FormContainer {...props}>
      <S.H2>
        <S.HighlightedTextContainer>
          {joinWaitingListFormContent.title.highlighted}
        </S.HighlightedTextContainer>
        {joinWaitingListFormContent.title.text}
      </S.H2>

      <S.InputWrapper>
        <S.InputField
          type='text'
          placeholder={joinWaitingListFormContent.emailHolder}
        ></S.InputField>
        <S.Button>{joinWaitingListFormContent.buttonText}</S.Button>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Checkbox type='checkbox'></S.Checkbox>
        <S.Label>
          I agree to the{" "}
          <S.HighlightedTextContainer className='underlined'>
            Terms & Conditions{" "}
          </S.HighlightedTextContainer>
          and the{" "}
          <S.HighlightedTextContainer className='underlined'>
            Privacy Policy
          </S.HighlightedTextContainer>
        </S.Label>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Checkbox type='checkbox'></S.Checkbox>
        <S.Label>I want to subscribe to the newsletter</S.Label>
      </S.InputWrapper>
    </S.FormContainer>
  );
};

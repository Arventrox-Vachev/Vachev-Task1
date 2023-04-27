import * as S from "./elements";
import { joinWaitingListFormContent } from "data";

export interface JoinWaitingListFormProps {}

export const JoinWaitingListForm = ({ ...props }: JoinWaitingListFormProps) => {
  return (
    <S.FormContainer {...props}>
      <S.H2 dangerouslySetInnerHTML={{ __html: joinWaitingListFormContent.title }} />

      <S.InputWrapper>
        <S.InputField
          type='text'
          placeholder={joinWaitingListFormContent.emailHolder}
        ></S.InputField>
        <S.Button>{joinWaitingListFormContent.buttonText}</S.Button>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Checkbox type='checkbox'></S.Checkbox>
        <S.Label>I agree to the Terms & Conditions and the Privacy Policy</S.Label>
      </S.InputWrapper>

      <S.InputWrapper>
        <S.Checkbox type='checkbox'></S.Checkbox>
        <S.Label>I want to subscribe to the newsletter</S.Label>
      </S.InputWrapper>
    </S.FormContainer>
  );
};

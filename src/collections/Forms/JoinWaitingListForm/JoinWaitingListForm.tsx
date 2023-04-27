import * as S from "./elements";
import { joinWaitingListFormContent } from "data";

export interface JoinWaitingListFormProps {}

export const JoinWaitingListForm = ({ ...props }: JoinWaitingListFormProps) => {
  return (
    <S.FormContainer {...props}>
      <S.H2 dangerouslySetInnerHTML={{ __html: joinWaitingListFormContent.title }} />

      <S.InputWrapper>
        <S.InputField type='text' placeholder={joinWaitingListFormContent.emailHolder} />
        <S.Button>{joinWaitingListFormContent.buttonText}</S.Button>
      </S.InputWrapper>

      {joinWaitingListFormContent.policiesText.map((policy, index) => (
        <S.InputWrapper key={index}>
          <S.Checkbox type='checkbox'></S.Checkbox>
          <S.Label dangerouslySetInnerHTML={{ __html: policy }} />
        </S.InputWrapper>
      ))}
    </S.FormContainer>
  );
};

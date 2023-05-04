import * as S from "./elements";
import { joinWaitingListFormProps } from "data";

export interface JoinWaitingListFormProps {}

export const JoinWaitingListForm = ({ ...props }: JoinWaitingListFormProps) => {
  return (
    <S.FormContainer {...props}>
      <S.Title dangerouslySetInnerHTML={{ __html: joinWaitingListFormProps.title }} />

      <S.InputWrapper>
        <S.InputField type='text' placeholder={joinWaitingListFormProps.emailHolder} />
        <S.Button>{joinWaitingListFormProps.buttonText}</S.Button>
      </S.InputWrapper>

      {joinWaitingListFormProps.policiesText.map((policy, index) => (
        <S.InputWrapper key={index}>
          <S.Checkbox type='checkbox'></S.Checkbox>
          <S.Label dangerouslySetInnerHTML={{ __html: policy }} />
        </S.InputWrapper>
      ))}
    </S.FormContainer>
  );
};

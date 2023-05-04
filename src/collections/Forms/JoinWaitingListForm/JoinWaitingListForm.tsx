import * as S from "./elements";
import { HTMLFormProps } from "types";

export interface JoinWaitingListFormProps {
  title: string;
  emailHolder: string;
  buttonText: string;
  policiesText: string[];
}

export const JoinWaitingListForm = ({
  title,
  emailHolder,
  buttonText,
  policiesText,
  ...props
}: JoinWaitingListFormProps & HTMLFormProps) => {
  return (
    <S.FormContainer {...props}>
      <S.Title dangerouslySetInnerHTML={{ __html: title }} />

      <S.InputWrapper>
        <S.InputField type='text' placeholder={emailHolder} />
        <S.Button>{buttonText}</S.Button>
      </S.InputWrapper>

      {policiesText.map((policy, index) => (
        <S.InputWrapper key={index}>
          <S.Checkbox type='checkbox'></S.Checkbox>
          <S.Label dangerouslySetInnerHTML={{ __html: policy }} />
        </S.InputWrapper>
      ))}
    </S.FormContainer>
  );
};

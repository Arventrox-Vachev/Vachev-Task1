import * as S from "./elements";
import { useState } from "react";
import { useZodForm } from "hooks";
import { HTMLFormProps } from "types";
import { joinWaitingListSchema } from "schemas";
import Image, { ImageProps } from "next/image";

export interface JoinWaitingListFormProps {
  title: string;
  successTitle: string;
  emailHolder: string;
  buttonText: string;
  validationImgs: { validImg: ImageProps; invalidImg: ImageProps };
  policiesText: { TOS: string; newsLetter: string };
  image: ImageProps;
}

export const JoinWaitingListForm = ({
  title,
  successTitle,
  emailHolder,
  buttonText,
  validationImgs,
  policiesText: { TOS, newsLetter },
  image,
  ...props
}: JoinWaitingListFormProps & HTMLFormProps) => {
  const { control, handleSubmit, formState, setValue, watch } = useZodForm(joinWaitingListSchema, {
    email: "",
    agreedToTOS: false,
    newsLetter: false
  });
  const { isSubmitSuccessful } = formState;

  const {} = watch();
  const submitHandler = handleSubmit(data => {
    console.log(data);
  });

  return (
    <S.JoinWaitingContainer>
      {!isSubmitSuccessful ? (
        <S.Form onSubmit={submitHandler} {...props}>
          <S.Title dangerouslySetInnerHTML={{ __html: title }} />
          <S.Container>
            <S.InputField
              placeholder={emailHolder}
              name='email'
              control={control}
              validationImgs={validationImgs}
            />
            <S.Button>{buttonText}</S.Button>
          </S.Container>
          <S.Checkbox name='agreedToTOS' label={TOS} control={control} />
          <S.Checkbox name='newsLetter' label={newsLetter} control={control} />
        </S.Form>
      ) : (
        <S.SuccessContainer>
          <S.Title dangerouslySetInnerHTML={{ __html: successTitle }} />
          <S.ImageWrapper>
            <Image {...image} />
          </S.ImageWrapper>
        </S.SuccessContainer>
      )}
    </S.JoinWaitingContainer>
  );
};

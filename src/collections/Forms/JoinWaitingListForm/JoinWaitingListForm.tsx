import * as S from "./elements";
import { useZodForm } from "hooks";
import { HTMLDivProps, HTMLFormProps } from "types";
import { joinWaitingListSchema } from "schemas";
import Image from "next/image";
import { SbBlokData } from "@storyblok/react";

export interface JoinWaitingListFormProps {
  joinWaitingListForm: SbBlokData[] | HTMLFormProps;
}

export const JoinWaitingListForm = ({
  joinWaitingListForm,
  ...props
}: JoinWaitingListFormProps & HTMLDivProps) => {
  const { control, handleSubmit, formState, setValue, watch } = useZodForm(joinWaitingListSchema, {
    email: "",
    agreedToTOS: false,
    newsLetter: false
  });
  const { isSubmitSuccessful } = formState;

  const {
    title,
    success_title,
    email_holder,
    button_text,
    tos_text,
    newsletter_text,
    success_image,
    invalidImage,
    validImage
  } = joinWaitingListForm[0];

  const submitHandler = handleSubmit(data => {
    console.log(data);
  });

  return (
    <S.JoinWaitingContainer {...props}>
      {!isSubmitSuccessful ? (
        <S.Form onSubmit={submitHandler}>
          <S.Title dangerouslySetInnerHTML={{ __html: title }} />
          <S.Container>
            <S.InputField
              placeholder={email_holder}
              name='email'
              hideValidIndicator={false}
              control={control}
              validImgSrc={validImage}
              invalidImgSrc={invalidImage}
            />
            <S.Button>{button_text}</S.Button>
          </S.Container>
          <S.Checkbox name='agreedToTOS' label={tos_text} control={control} />
          <S.Checkbox name='newsLetter' label={newsletter_text} control={control} />
        </S.Form>
      ) : (
        <S.SuccessContainer>
          <S.Title dangerouslySetInnerHTML={{ __html: success_title }} />
          <S.ImageWrapper>
            <Image src={success_image.filename} alt='' width={196} height={147} />
          </S.ImageWrapper>
        </S.SuccessContainer>
      )}
    </S.JoinWaitingContainer>
  );
};

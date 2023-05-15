import * as S from "./elements";
import Image from "next/image";
import { useZodForm } from "hooks";
import { HTMLDivProps } from "types";
import { joinWaitingListSchema } from "schemas";

export interface JoinWaitingListFormProps {
  title: string;
  success_title: string;
  email_holder: string;
  button_text: string;
  tos_text: string;
  newsletter_text: string;
  success_image: { alt: string; filename: string };
  invalidImage: { alt: string; filename: string };
  validImage: { alt: string; filename: string };
}

export const JoinWaitingListForm = ({
  title,
  success_title,
  email_holder,
  button_text,
  tos_text,
  newsletter_text,
  success_image,
  invalidImage,
  validImage,
  ...props
}: JoinWaitingListFormProps & HTMLDivProps) => {
  const { control, handleSubmit, formState, setValue, watch } = useZodForm(joinWaitingListSchema, {
    email: "",
    agreedToTOS: false,
    newsLetter: false
  });
  const { isSubmitSuccessful } = formState;

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
            <Image src={success_image.filename} alt={success_image.alt} width={196} height={147} />
          </S.ImageWrapper>
        </S.SuccessContainer>
      )}
    </S.JoinWaitingContainer>
  );
};

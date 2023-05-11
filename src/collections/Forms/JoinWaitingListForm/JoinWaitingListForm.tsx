import * as S from "./elements";
import { useZodForm } from "hooks";
import { HTMLDivProps, HTMLFormProps } from "types";
import { joinWaitingListSchema } from "schemas";
import Image, { ImageProps } from "next/image";

export interface JoinWaitingListFormProps {
  title: string;
  successTitle: string;
  emailHolder: string;
  buttonText: string;
  validationImgs: { validImgSrc: string; invalidImgSrc: string };
  policiesText: { tOS: string; newsLetter: string };
  image: ImageProps;
}

export const JoinWaitingListForm = ({
  title,
  successTitle,
  emailHolder,
  buttonText,
  validationImgs,
  policiesText: { tOS, newsLetter },
  image,
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
              placeholder={emailHolder}
              name='email'
              hideValidIndicator={false}
              control={control}
              {...validationImgs}
            />
            <S.Button>{buttonText}</S.Button>
          </S.Container>
          <S.Checkbox name='agreedToTOS' label={tOS} control={control} />
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

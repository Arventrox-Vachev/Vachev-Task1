import * as S from "./elements";
import Image from "next/image";
import { useZodForm } from "hooks";
import { HTMLDivProps, JoinWaitingListFormStoryblok } from "types";
import { joinWaitingListSchema } from "schemas";
import { storyblokEditable } from "@storyblok/react";

export interface JoinWaitingListProps extends JoinWaitingListFormStoryblok {
  blok: JoinWaitingListFormStoryblok;
}

export const JoinWaitingListForm = ({
  heading,
  successHeading,
  emailHolder,
  buttonText,
  tosText,
  newsletterText,
  successImage,
  invalidImage,
  validImage,
  desktopActiveImage,
  mobileActiveImage,
  blok,
  ...props
}: JoinWaitingListProps & HTMLDivProps) => {
  const { control, handleSubmit, formState } = useZodForm(joinWaitingListSchema, {
    email: "",
    agreedToTOS: false,
    newsLetter: false
  });
  const { isSubmitSuccessful } = formState;

  const submitHandler = handleSubmit(data => {
    console.log(data);
  });

  return (
    <S.JoinWaitingContainer {...props} {...storyblokEditable(blok)}>
      {!isSubmitSuccessful ? (
        <S.Form onSubmit={submitHandler}>
          <S.Title dangerouslySetInnerHTML={{ __html: heading }} />
          <S.Container>
            <S.InputField
              placeholder={emailHolder}
              name='email'
              hideValidIndicator={false}
              control={control}
              validImgSrc={validImage}
              invalidImgSrc={invalidImage}
            />
            <S.Button>{buttonText}</S.Button>
          </S.Container>
          <S.Checkbox
            desktopActiveImage={desktopActiveImage.filename}
            mobileActiveImage={mobileActiveImage.filename}
            name='agreedToTOS'
            label={tosText}
            control={control}
          />
          <S.Checkbox
            desktopActiveImage={desktopActiveImage.filename}
            mobileActiveImage={mobileActiveImage.filename}
            name='newsLetter'
            label={newsletterText}
            control={control}
          />
        </S.Form>
      ) : (
        <S.SuccessContainer>
          <S.Title dangerouslySetInnerHTML={{ __html: successHeading }} />
          <S.ImageWrapper>
            <Image src={successImage.filename} alt={successImage.alt} width={196} height={147} />
          </S.ImageWrapper>
        </S.SuccessContainer>
      )}
    </S.JoinWaitingContainer>
  );
};

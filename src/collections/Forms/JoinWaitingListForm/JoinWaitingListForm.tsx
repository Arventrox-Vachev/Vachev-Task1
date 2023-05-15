import * as S from "./elements";
import Image from "next/image";
import { useZodForm } from "hooks";
import { HTMLDivProps } from "types";
import { joinWaitingListSchema } from "schemas";

export interface JoinWaitingListFormProps {
  heading: string;
  successHeading: string;
  emailHolder: string;
  buttonText: string;
  tosText: string;
  newsletterText: string;
  successImage: { alt: string; filename: string };
  invalidImage: { alt: string; filename: string };
  validImage: { alt: string; filename: string };
  desktopActiveImage: { filename: string };
  mobileActiveImage: { filename: string };
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

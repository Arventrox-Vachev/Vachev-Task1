import * as S from "./elements";
import { useZodForm } from "hooks";
import { HTMLFormProps } from "types";
import { registerSchema } from "schemas";
import { useRouter } from "next/router";
import { db } from "../../../../firebase.config";
import { collection, addDoc } from "firebase/firestore";

export interface RegisterFormProps {
  heading: string;
  nameLabel: string;
  emailLabel: string;
  passwordLabel: string;
  nameHolder: string;
  emailHolder: string;
  passwordHolder: string;
  buttonText: string;
  validationImgs: { validImgSrc: string; invalidImgSrc: string };
}

export const RegisterForm = ({
  heading,
  nameLabel,
  emailLabel,
  passwordLabel,
  nameHolder,
  emailHolder,
  passwordHolder,
  buttonText,
  validationImgs,
  ...props
}: RegisterFormProps & HTMLFormProps) => {
  const router = useRouter();
  const { control, handleSubmit, formState, setValue, watch } = useZodForm(registerSchema, {
    email: "",
    password: ""
  });

  const submitHandler = handleSubmit(async data => {
    console.log(data);

    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: data.email,
        emailVerified: null,
        password: data.password,
        name: data.name
      });
      console.log("Document written with ID: ", docRef.id);
      if (docRef.id) router.replace("api/auth/signin");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });

  return (
    <S.Form onSubmit={submitHandler} {...props}>
      <S.Title dangerouslySetInnerHTML={{ __html: heading }} />
      <S.InputField
        label={nameLabel}
        placeholder={nameHolder}
        name='name'
        hideValidIndicator={false}
        control={control}
        {...validationImgs}
      />
      <S.InputField
        label={emailLabel}
        placeholder={emailHolder}
        name='email'
        hideValidIndicator={false}
        control={control}
        {...validationImgs}
      />
      <S.InputField
        label={passwordLabel}
        placeholder={passwordHolder}
        type='password'
        name='password'
        hideValidIndicator={false}
        control={control}
        {...validationImgs}
      />
      <S.Button>{buttonText}</S.Button>
    </S.Form>
  );
};

import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { RegisterForm } from "collections";
import { registerFormProps } from "data";

const Register: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) router.replace("/");
  return <RegisterForm {...registerFormProps} />;
};

export default Register;

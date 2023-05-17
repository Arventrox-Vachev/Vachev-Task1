import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { RegisterForm } from "collections";
import { registerFormProps } from "data";

const Register: NextPage = () => {
  return <RegisterForm {...registerFormProps} />;
};

export default Register;

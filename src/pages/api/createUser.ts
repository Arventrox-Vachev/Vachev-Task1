import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { firestore } from "lib";
import { z } from "zod";
import { signUpSchema } from "schemas";
import { checkUserExists } from "./middlewares";

interface CreateUserRequestBody extends NextApiRequest {
  email: string;
  name: string;
  password: string;
  image: string;
}

interface CreateUserResponse {
  id: string;
  email: string;
  name: string;
  image: string;
}

const handler = nc<
  CreateUserRequestBody,
  NextApiResponse<CreateUserResponse | { message: string; errors?: string[] }>
>({
  onNoMatch: (req, res) => {
    res.status(404).end("Page not found");
  },
  onError: (err, req, res) => {
    if (err instanceof z.ZodError) {
      const errors = err.errors.map(err => err.message);
      res.status(400).json({ message: "Invalid request body", errors });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
});

handler.use(checkUserExists);

handler.post(async (req, res) => {
  const { email, name, password, image } = signUpSchema.parse(req.body);
  console.log(password);

  const hashedPassword = await bcrypt.hash(password, 10);
  const userRef = await firestore.collection("users").add({
    email,
    name,
    password: hashedPassword,
    image
  });

  res.status(200).json({ id: userRef.id, email, name, image });
});

export default handler;

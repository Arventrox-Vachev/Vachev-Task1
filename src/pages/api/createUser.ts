import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { firestore } from "lib";
import { z } from "zod";
import { signUpSchema } from "schemas";
import { checkUserExists, checkPasswordsMatch } from "./middleware";

interface CreateUserRequestBody extends NextApiRequest {
  email: string;
  name: string;
  password: string;
  image: string;
}

interface CreateUserResponse extends NextApiResponse {
  id: string;
  email: string;
  name: string;
  image: string;
}

const handler = nc<CreateUserRequestBody, CreateUserResponse>({
  onNoMatch: (_, res) => {
    res.status(404).end("Page not found");
  },
  onError: (err, _, res) => {
    if (err instanceof z.ZodError) {
      res.status(400).end("Invalid request body");
    } else {
      res.status(500).end("Internal server error");
    }
  }
});

handler.use(checkUserExists);
handler.use(checkPasswordsMatch);

handler.post(async (req, res) => {
  const { email, name, password, image } = signUpSchema.parse(req.body);
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

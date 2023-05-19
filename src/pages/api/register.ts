import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { firestore } from "lib";
import { z } from "zod";
import { registerSchema } from "schemas";

interface CreateUserRequestBody {
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CreateUserResponse | { message: string; errors?: string[] }>
) {
  if (req.method === "POST") {
    try {
      const { email, name, password, image }: CreateUserRequestBody = registerSchema.parse(
        req.body
      );

      const userExists = await checkUserExists(email);

      if (userExists) {
        res.status(409).json({ message: "User already exists" });
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const userRef = await createUser(email, name, hashedPassword, image);

      res.status(200).json({ id: userRef.id, email, name, image });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.map(err => err.message);
        res.status(400).json({ message: "Invalid request body", errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

async function createUser(email: string, name: string, password: string, image?: string) {
  const userRef = await firestore.collection("users").add({
    email,
    name,
    password,
    image
  });

  return userRef;
}

async function checkUserExists(email: string) {
  const querySnapshot = await firestore
    .collection("users")
    .where("email", "==", email)
    .limit(1)
    .get();

  return !querySnapshot.empty;
}

import { NextHandler } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

export const checkPasswordsMatch = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  const { password, matchPassword }: { password: string; matchPassword: string } = req.body;

  try {
    if (password !== matchPassword) {
      res.status(400).json({ message: "Passwords do not match" });
    }

    next();
  } catch (error) {
    console.error("Passwords do not match :", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

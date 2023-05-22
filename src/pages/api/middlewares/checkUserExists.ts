import { NextHandler } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib";

export const checkUserExists = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  const { email }: { email: string } = req.body;

  try {
    const querySnapshot = await firestore
      .collection("users")
      .where("email", "==", email)
      .limit(1)
      .get();

    if (!querySnapshot.empty) {
      res.status(409).json({ message: "Email already exists" });
      return;
    }

    next();
  } catch (error) {
    console.error("Error checking user existence:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

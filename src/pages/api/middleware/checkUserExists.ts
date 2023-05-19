import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { firestore } from "lib";

const checkUserExists: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
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

    return { req, res };
  } catch (error) {
    console.error("Error checking user existence:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export default checkUserExists;

import { getServerAuthSession } from "./auth/[...nextauth]";

export const handler = async (req, res) => {
  const session = await getServerAuthSession(req, res);

  if (!session) {
    res.status(404).json({ message: "Unauthorized" });
  }

  res.status(200).json({ message: "Welcome" });
};

export default handler;

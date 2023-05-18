import { firestore } from "lib";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, password, image } = req.body;
    const user = await firestore.collection("users").add({ email, name, password, image });

    // Return the user or any other response as needed
    res.status(200).json({ user });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

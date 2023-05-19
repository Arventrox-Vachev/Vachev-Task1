import NextAuth, { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import Credentials from "next-auth/providers/credentials";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { firestore } from "lib";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: FirestoreAdapter(firestore),
  providers: [
    Credentials({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@email.com" },
        password: { label: "Password", type: "password", placeholder: "enter your password" }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as { email: string; password: string };
        const user = await firestore.collection("users").where("email", "==", email).get();

        if (user.empty) throw new Error("Invalid Email");

        const userDoc = user.docs[0];
        const id = userDoc.id;
        const { email: dbEmail, name: dbName, password: hashedPassword, image } = userDoc.data();
        const isMatch = await bcrypt.compare(password, hashedPassword);

        if (email !== dbEmail || !isMatch) throw new Error("Invalid password");

        return { id, email, name: dbName, image };
      }
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET
    })
  ],
  session: { strategy: "jwt" },
  secret: process.env.JWT_SECRET
};
export default NextAuth(authOptions);

export const getServerAuthSession = (req, res) => {
  return getServerSession(req, res, authOptions);
};

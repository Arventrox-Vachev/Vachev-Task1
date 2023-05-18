import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import Credentials from "next-auth/providers/credentials";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase.config";

export const authOptions: NextAuthOptions = {
  adapter: FirestoreAdapter(),
  providers: [
    Credentials({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@email.com" },
        password: { label: "Password", type: "password", placeholder: "enter your password" }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as { email: string; password: string };
        const querySnapshot = await getDocs(collection(db, "users"));
        const docsData: any = [];

        querySnapshot.forEach(doc => {
          docsData.push({ id: doc.id, ...doc.data() });
        });

        const validUser = await docsData.find(
          doc => doc.email === email && doc.password === password
        );

        if (!validUser) return null;

        return { id: validUser.id, email: validUser.email, name: validUser.name };
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

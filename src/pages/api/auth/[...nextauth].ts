import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import Credentials from "next-auth/providers/credentials";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { addDoc, collection, getDocs } from "firebase/firestore";
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
        const docsData: any = [];
        const querySnapshot = await getDocs(collection(db, "users"));

        querySnapshot.forEach(doc => {
          docsData.push({ key: doc.id, ...doc.data() });
        });

        const isValid = await docsData.some(doc => doc.email == email && doc.password == password);
        const validUser = docsData.find(doc => doc.email == email && doc.password == password);
        console.log(validUser);
        console.log(email);
        console.log(password);
        console.log(isValid);

        // try {
        //   const docRef = await addDoc(collection(db, "sessions"), {
        //     expires: new Date(new Date().getTime() + 60 * 60 * 1000).toDateString(),
        //     sessionToken: "17f22d74-2ce0-4b18-8875-8dd8e5a66142",
        //     userId: validUser.key
        //   });
        //   console.log("Document written with ID: ", docRef.id);
        // } catch (e) {
        //   console.error("Error adding document: ", e, validUser);
        // }

        if (!isValid) return null;
        return { id: validUser.id, email: validUser.email };
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
  secret: process.env.JWT_SECRET
};
export default NextAuth(authOptions);

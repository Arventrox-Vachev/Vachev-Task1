import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: "jwt"
  },
  providers: [
    Credentials({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "test@email.com" },
        password: { label: "Password", type: "password", placeholder: "enter your password" }
      },
      authorize(credentials, req) {
        const { email, password } = credentials as { email: string; password: string };
        if (email !== "test@gmail.com" || password !== "123") return null;
        console.log({ id: "1", name: "test", email: email });

        return { id: "1", name: "test", email: email };
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

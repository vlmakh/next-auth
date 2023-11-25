import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
};

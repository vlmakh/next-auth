import type { AuthOptions, User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// import Credentials from 'next-auth/providers/credentials'
// import { users } from '@/data/users';

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    
  ],
//   pages: {
//     signIn: '/signin'
//   }
}
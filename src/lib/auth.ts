import { AuthOptions, NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  // Secret for Next-auth, without this JWT encryption/decryption won't work
  secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
    }),
  ],
  adapter: PrismaAdapter(prisma),
} as AuthOptions;

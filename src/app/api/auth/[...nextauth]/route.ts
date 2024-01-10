import NextAuth, { RequestInternal } from "next-auth";
import GithubProviders from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import GoogleProviders from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/libs/prisma";

import * as dotenv from "dotenv";

dotenv.config({
  path: `.env`,
});

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProviders({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials: any) {
        if (credentials) {
          const user = await prisma.user.findFirst({
            where: { username: credentials.username as string },
          });

          if (user?.password === credentials.password) {
            return user;
          }
        }

        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions as any);

export { handler as POST, handler as GET };

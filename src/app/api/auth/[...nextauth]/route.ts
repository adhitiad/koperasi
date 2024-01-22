import NextAuth, { AuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GithubProviders from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import GoogleProviders from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/libs/prisma";
import { Role } from "@prisma/client";
import bcrypt from "bcryptjs";
import * as dotenv from "dotenv";

dotenv.config({
  path: `.env`,
});

const authOption: AuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
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
        email: {
          label: "email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "••••••••••",
        },
      },
      async authorize(credentials: any, req) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter an email and password");
        }

        const user = await prisma.user.findUnique({
          where: {
            id: credentials?.id,
            email: credentials?.email,
          },
        });

        if (!user) {
          throw new Error("No user found");
        }

        const isPasswordValid = bcrypt.compare(
          credentials.password,
          user.password as string
        );

        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOption);

export { handler as POST, handler as GET };

import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  //   adapter: PrismaAdapter(db),

  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }
        // console.log("credentials", credentials);
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user) {
          console.log("user not found");
          throw new Error("Please enter a valid email address!");
        }
        if (!user?.password) {
          console.log("password not found");
          throw new Error("Password not created");
        }

        const isCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isCorrect) {
          console.log("password not correct");
          throw new Error("Incorrect password");
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      const userSession = await prisma.user.findUnique({
        where: {
          email: session.user?.email!,
        },
      });

      if (session) {
        session.user.id = userSession?.id;
        session.user.username = userSession?.username;
        session.user.email = userSession?.email;
        session.user.role = userSession?.role;
        session.user.firstname = userSession?.firstName;
        session.user.lastname = userSession?.lastName;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
};

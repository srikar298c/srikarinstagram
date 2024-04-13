import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import { Adapter, AdapterUser } from "next-auth/adapters";
import NextAuth, { getServerSession, type NextAuthOptions } from "next-auth";
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";

const adapter: Adapter = PrismaAdapter(prisma) as Adapter;

export const config: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
          image: token.picture,
          username: token.username,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      const prismaUser = await prisma.user.findFirst({
        where: { email: token.email },
      });

      if (!prismaUser) {
        return token;
      }

      if (!prismaUser.username) {
        await prisma.user.update({
          where: { id: prismaUser.id },
          data: {
            username: prismaUser.name?.split(" ").join("").toLowerCase(),
          },
        });
      }

      return {
        ...token,
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email,
        username: prismaUser.username,
        picture: prismaUser.image,
      };
    },
  },
};

export default NextAuth(config);

// Use it in server contexts
export function auth(
  ...args: [
    GetServerSidePropsContext["req"],
    GetServerSidePropsContext["res"]
  ] |
  [NextApiRequest, NextApiResponse] | []
) {
  return getServerSession(...args, config);
}
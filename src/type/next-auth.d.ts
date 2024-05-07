import NextAuth from "next-auth/next";

declare module "next-auth/next" {
  interface Session {
    user: {
      id: string
      name:string,
      telefone:string
    }
  }
}
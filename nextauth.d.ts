import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface ExtendedUser extends JWT {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    sub?: string;
    iat?: string;
    exp?: string;
    jti?: string;
    id: string;
    jwt: string;
  }

  interface Session extends DefaultSession {
    user?: ExtendedUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    jwt: string;
  }
}

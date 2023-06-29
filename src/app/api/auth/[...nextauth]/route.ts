import NextAuth, { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/signin",
  },

  session: { strategy: "jwt" },

  callbacks: {
    async session({ user, session, token }) {
      session.user = token;
      return Promise.resolve(session);
    },

    async jwt({ token, user, account }) {
      const isSignIn = user ? true : false;
      if (isSignIn && account) {
        try {
          console.log("Google Account >>>>>>>>>>>>>> ", account);
          const public_url = process.env.NEXT_PUBLIC_API_URL;
          const response = await fetch(
            `${public_url}/api/auth/${account.provider}/callback?access_token=${account?.access_token}`
          );
          const data = await response.json();
          console.log("Strapi Callback Data >>>>>>>>>>>>>> ", data);

          token.jwt = data.jwt;
          token.id = data.user.id;
        } catch (error) {
          console.error("Fetch failed:", error);
        }
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

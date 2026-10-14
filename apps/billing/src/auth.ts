import NextAuth, { type DefaultSession } from "next-auth";
import GitHub from "next-auth/providers/github";
import { upsertCustomerFromGithub } from "./lib/db";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      customerId: string;
      githubUsername: string;
    };
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const githubId = String(profile.id ?? "");
        const login = String(profile.login ?? "");
        const email = String(profile.email ?? token.email ?? `${login}@users.noreply.github.com`);
        if (githubId && login) {
          const customer = await upsertCustomerFromGithub({
            authUserId: `github:${githubId}`,
            email,
            githubId,
            githubUsername: login,
          });
          token.customerId = customer.id;
          token.githubUsername = login;
        }
      }
      return token;
    },
    async session({ session, token }) {
      const customerId = token.customerId;
      const githubUsername = token.githubUsername;
      if (typeof customerId === "string") session.user.customerId = customerId;
      if (typeof githubUsername === "string") session.user.githubUsername = githubUsername;
      return session;
    },
  },
});

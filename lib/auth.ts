import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "your username",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const gateway_url = process.env.GATEWAY_URL;
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Missing username or password");
        }
        const res = await fetch(`${gateway_url}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
          }),
        });
        const user = await res.json();
        if (res.ok && user && user.message === "Login successful") {
          return {
            id: user.id,
            name: String(credentials.username),
            accessToken: user.token, 
            role: user.role || "user",
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add user data to the token during initial sign-in
      if (user) {
        token.id = user.id;
        token.accessToken = user.accessToken;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.id as string, 
        role: token.role as string,
        accessToken: token.accessToken as string, 
      };
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
});

import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next'
import { getServerSession, NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'


export const config = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "your username" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const gateway_url = process.env.GATEWAY_URL || 'http://localhost:5000/api/v1'
        if (!credentials?.username || !credentials?.password) {
          throw new Error('Missing username or password')
        }
        const res = await fetch(`${gateway_url}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password
          })
        })
        const user = await res.json()
        if (res.ok && user) {
          return user
        } else {
          return null
        }

      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: '/login',
  }
} satisfies NextAuthOptions

export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config)
}


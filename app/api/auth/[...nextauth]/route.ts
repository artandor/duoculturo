import NextAuth, {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "@/components/lib/database";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/auth/login',
        signOut: '/auth/logout',
        /*        error: '/auth/error', // Error code passed in query string as ?error=
                verifyRequest: '/auth/verify-request', // (used for check email message)
                newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)*/
    },
    callbacks: {
        async session({session, token, user}) {
            if (session.user) {
                // @ts-ignore
                session.user.id = user.id
            }
            return session
        }
    },
    providers: [
        process.env.VERCEL_ENV === "preview"
            ? CredentialsProvider({
                name: "Credentials",
                credentials: {
                    username: {
                        label: "Username",
                        type: "text",
                        placeholder: "jsmith",
                    },
                    password: {label: "Password", type: "password"},
                },
                async authorize(): Promise<any> {
                    return {
                        id: 1,
                        name: "J Smith",
                        email: "jsmith@example.com",
                        image: "https://i.pravatar.cc/150?u=jsmith@example.com",
                    }
                }
            })
            :
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID ?? '',
                clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
            })
    ]
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
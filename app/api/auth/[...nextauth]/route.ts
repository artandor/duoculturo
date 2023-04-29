import NextAuth, {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google";
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
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
        })
    ]
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
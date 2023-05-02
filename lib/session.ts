import {getServerSession} from "next-auth/next"
import {authOptions} from "@/components/app/api/auth/[...nextauth]/route";

export async function getCurrentUser(): Promise<any> {
    const session = await getServerSession(authOptions)

    return session?.user
}
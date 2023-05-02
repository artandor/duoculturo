"use client";
import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";


export default function Page() {
    const router = useRouter()
    signOut({redirect: false, callbackUrl: ""})
        .then(() => router.push(`/auth/login`))

    return <p>Redirecting ...</p>
}

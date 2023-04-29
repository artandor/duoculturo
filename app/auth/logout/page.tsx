"use client";
import {signOut} from "next-auth/react"

export default async function page() {
    await signOut({callbackUrl: '/auth/login'})
}

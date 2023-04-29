import React from 'react'
import ThemeList from "@/components/components/ThemeList";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/components/app/api/auth/[...nextauth]/route";

type Props = {}


async function page({}: Props) {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect('/auth/login')
    }

    return (
        <main className="container mx-auto my-3 text-center">
            <p className="text-3xl">Bienvenue {session.user.name} {"<" + session.user.email + ">"} !</p>
            <h1 className="text-2xl mt-3">Choisis un thème</h1>
            {/* @ts-expect-error Async Server Component */}
            <ThemeList/>
        </main>
    )
}

export default page;
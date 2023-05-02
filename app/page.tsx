import React, {Suspense} from 'react'
import ThemeList from "@/components/components/ThemeList";
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/components/app/api/auth/[...nextauth]/route";
import {ActivityList} from "@/components/components/ActivityList";
import {Typography} from "@/components/components/override/material";
import Spinner from "@/components/components/Spinner";

type Props = {}


async function page({}: Props) {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
        redirect('/auth/login')
    }

    return (
        <main className="container mx-auto my-3 text-center">
            <div className="grid grid-cols-12">
                <div className="md:col-start-1 md:col-end-10 col-start-1 col-end-8">
                    {/* @ts-expect-error Async Server Component */}
                    <ThemeList/>
                </div>
                <div className="md:col-start-10 md:col-end-13 col-start-8 col-end-13 ms-3">
                    <Typography variant="h3">Latest activities</Typography>
                    <Suspense fallback={<Spinner/>}>
                        {/* @ts-expect-error Async Server Component */}
                        <ActivityList/>
                    </Suspense>
                </div>
            </div>
        </main>
    )
}

export default page;
import React, {Suspense} from 'react'
import ThemeList from "@/components/components/ThemeList";
import Spinner from "@/components/components/Spinner";

type Props = {}

function page({}: Props) {

    return (
        <main className="container mx-auto my-3 text-center">
            <h1 className="text-3xl">Choisis un thème !</h1>
            <Suspense fallback={<Spinner/>}>
                {/* @ts-expect-error Async Server Component */}
                <ThemeList/>
            </Suspense>
        </main>
    )
}

export default page;
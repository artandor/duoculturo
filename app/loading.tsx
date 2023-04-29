import React, {ReactElement} from "react";
import EmptyCard from "@/components/components/EmptyCard";

export default function Loading() {
    const blocks: ReactElement[] = []


    return (
        <main className="container mx-auto my-3 text-center">
            <p className="text-3xl">Bienvenue !</p>
            <h1 className="text-2xl mt-3">Prépare toi à choisir un thème !</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mx-auto my-3'>
                {[...Array(10)].map((x: any, i: number) => {
                    return <EmptyCard key={i}/>
                })}
            </div>
        </main>
    )
}
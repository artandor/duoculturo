import React from "react";
import EmptyCard from "@/components/components/EmptyCard";

export default function Loading() {
    return (
        <main className="container mx-auto my-3 text-center">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mx-auto my-3'>
                {[...Array(10)].map((x: any, i: number) => {
                    return <EmptyCard key={i}/>
                })}
            </div>
        </main>
    )
}
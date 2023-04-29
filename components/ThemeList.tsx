import React from "react";
import {Theme} from "@prisma/client";
import {slugify} from "@/components/lib/tools";
import {prisma} from "@/components/lib/database";
// @ts-ignore
import decode from "decode-html";
import ThemeCard from "@/components/components/ThemeCard";

export default async function ThemeList() {
    const themes: Theme[] = await getData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mx-auto my-3'>
            {themes.map(theme => {
                return <ThemeCard key={theme.id} theme={theme}/>;
            })}
        </div>
    )
}

async function getData(): Promise<Theme[]> {
    const response = await fetch('https://opentdb.com/api_category.php', {next: {revalidate: 86400}})
    const json = await response.json()

    const modifiedData: Theme[] = json["trivia_categories"].map((theme: { id: number, name: string }) => {
        return {
            id: theme.id,
            name: theme.name,
            slug: slugify(theme.name)
        }
    })

    await prisma.theme.createMany({
        data: modifiedData,
        skipDuplicates: true
    })

    return prisma.theme.findMany({orderBy: {name: 'asc'}});
}

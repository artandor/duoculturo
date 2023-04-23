import React from 'react'
import {Card, CardBody, CardFooter, Typography} from "@/components/components/override/material";
import Link from "next/link";

type Props = {}

async function page({}: Props) {
    const themes: Theme[] = await getData();


    return (
        <div className='container mx-64 my-16 flex flex-wrap justify-between'>
            {themes.map(theme => {
                return (
                    <Card key={theme.id} className="w-96 m-5">
                        <CardBody className="text-center">
                            <Typography variant="h5" className="mb-2">
                                {theme.name}
                            </Typography>
                        </CardBody>
                        <CardFooter divider className="flex items-center justify-between py-3">
                            <Link href={`/quizz/${theme.id}`}>Start quizz</Link>
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
    )
}

async function getData(): Promise<Theme[]> {
    const response = await fetch('https://opentdb.com/api_category.php', {next: {revalidate: 60}})
    const json = await response.json()
    return json["trivia_categories"];
}

export default page;
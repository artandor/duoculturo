"use client"
import {Card, CardBody, CardFooter, Typography} from "@/components/components/override/material";
import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

type Props = {
    theme: Theme,
}

export default function ThemeCard({theme}: Props) {
    const router = useRouter()
    return (
        <Card key={theme.id} className="bg-light">
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2 whitespace-nowrap text-ellipsis overflow-hidden">
                    {theme.name}
                </Typography>
            </CardBody>
            <CardFooter divider className="py-3 text-center bg-purple text-white rounded-b-xl">
                <Link href={`/quizz/`} onClick={async (event) => {
                    event.preventDefault();
                    const response = await fetch(`${window.location.href}/api/quizz?slug=${theme.slug}`);
                    router.push(await response.json())
                }
                }>Start quizz</Link>
            </CardFooter>
        </Card>
    )
}
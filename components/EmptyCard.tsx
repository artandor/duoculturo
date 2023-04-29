import {Card, CardBody, CardFooter, Typography} from "@/components/components/override/material";
import React from "react";
import Link from "next/link";
import Spinner from "@/components/components/Spinner";

type Props = {}

export default function EmptyCard({}: Props) {
    return (
        <Card className="bg-light">
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2">
                    <Spinner/>
                </Typography>
            </CardBody>
            <CardFooter divider className="py-3 text-center bg-purple text-white rounded-b-xl">
                <Link href={`/quizz/`} className="disabled">Start quizz</Link>
            </CardFooter>
        </Card>
    )
}
"use client";
import React from "react";
import useSWRInfinite from "swr/infinite";
import {Card, Typography} from "@/components/components/override/material";
import QuestionTableRow from "@/components/components/QuestionTableRow";
import Spinner from "@/components/components/Spinner";

const getKey = (pageIndex: number, previousPageData: any) => {
    // first page, we don't have `previousPageData`
    if (!previousPageData || previousPageData.length <= 0) return `/api/questions?pageSize=20`

    // add the cursor to the API endpoint
    return `/api/questions?cursor=${previousPageData.at(-1).id}&pageSize=10`
}
export default function Page() {
    const TABLE_HEAD = ["id", "Description", "Theme"];

    const fetcher = (url: string) => fetch(url, {}).then(r => r.json())

    const {data, size, setSize} = useSWRInfinite(getKey, fetcher)


    // if (error) return <div>failed to load</div>
    if (!data) return <div className="container mx-auto"><Spinner/></div>

    return (
        <div className='container mx-auto'>
            <Card className="h-full w-full">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((questions: { id: number, title: string, theme: Theme }[], index) => {
                        return (
                            questions.map((question, questionIndex) => <QuestionTableRow question={question}
                                                                                         key={question.id}
                                                                                         isLast={questionIndex === questions.length - 1}
                                                                                         loadNextItems={() => setSize(size + 1)}/>)
                        )
                    })}
                    </tbody>
                </table>
            </Card>
        </div>
    )
}
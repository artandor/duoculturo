import QuizzComponent from '@/components/components/QuizzComponent';
import React from 'react'
import {prisma} from "@/components/lib/database";

type Props = {
    params: {
        theme: string
        quizz: number
    }
}

async function page({params}: Props) {
    const quizz: any = await getQuizzById(Number(params.quizz));


    return (
        <div className='container md:mx-64 my-16'>
            <QuizzComponent quizz={quizz}/>
        </div>
    )
}

function getQuizzById(id: number) {
    return prisma.quizz.findUniqueOrThrow({
            where: {id: id}, include: {
                questions: {
                    include: {
                        theme: true,
                        answers: {
                            select: {
                                id: true,
                                title: true
                            },
                            orderBy: {title: "asc"}
                        }
                    }
                }
            }
        }
    );
}

export default page;
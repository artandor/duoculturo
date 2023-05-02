import QuizzComponent from '@/components/components/QuizzComponent';
import React from 'react'
import {prisma} from "@/components/lib/database";
import {getCurrentUser} from "@/components/lib/session";
import {redirect} from "next/navigation";

type Props = {
    params: {
        theme: string
        quizz: number
    }
}

async function page({params}: Props) {
    const quizz: any = await getQuizzById(Number(params.quizz));
    const existingTry = await getUserTryByQuizz(quizz)

    if (!existingTry) {
        redirect("/")
    }

    return (
        <div className='container mx-auto'>
            <QuizzComponent quizz={quizz} quizzUser={existingTry}/>
        </div>
    )
}

async function getUserTryByQuizz(quizz: any) {

    const user = await getCurrentUser()

    if (!user) {
        return null;
    }

    let existingTryForUserOnQuizz = await prisma.quizzUser.findFirst({
        where: {
            AND: [
                {
                    quizzId: quizz.id,
                    userId: user.id,
                }
            ],
            OR: [
                {
                    score: {
                        lt: quizz.questions.length
                    }
                }
            ]
        }
    })

    if (!existingTryForUserOnQuizz) {
        const updatedQuizz = await prisma.quizz.update({
            where: {
                id: quizz.id
            },
            data: {
                QuizzUser: {
                    create: {
                        user: {
                            connect: {
                                email: user.email ?? ""
                            },
                        }
                    }
                }
            },
            include: {
                QuizzUser: {
                    take: 1,
                    where: {
                        quizzId: quizz.id,
                        userId: user.id,
                    }
                }
            }
        })
        return updatedQuizz.QuizzUser[0];
    }
    return existingTryForUserOnQuizz
}

async function getQuizzById(id: number) {
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
            },
            QuizzUser: true,
            _count: {
                select: {
                    questions: true
                }
            }
        }
        }
    );
}

export default page;
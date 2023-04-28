import QuizzComponent from '@/components/components/QuizzComponent';
import React from 'react'
// @ts-ignore
import decode from "decode-html"
import {prisma} from "@/components/app/database";

type Props = {
    params: {
        category: number
    }
}

async function page({params}: Props) {
    const quizz: Quizz = await getQuizzForCategory(params.category);


    return (
        <div className='container mx-64 my-16'>
            <QuizzComponent quizz={quizz}/>
        </div>
    )
}

async function getQuizzForCategory(categoryId: number): Promise<Quizz> {
    let apiQuestions: Question[] = await getQuestionsForCategory(categoryId);

    const quizz = await prisma.quizz.create({
        data: {}
    })

    await Promise.all(apiQuestions.map(async (apiQuestion) => {
        return prisma.question.create({
            data: {
                title: apiQuestion.title,
                theme: {
                    connect: {
                        id: Number(categoryId)
                    }
                },
                quizz: {
                    connect: {
                        id: quizz.id
                    }
                },
                multiple: apiQuestion.multiple,
                answers: {
                    createMany: {
                        data: apiQuestion.answers.map((answer: Answer) => {
                            return {
                                title: answer.title,
                                isCorrect: answer.isCorrect
                            }
                        })
                    }
                }
            }
        })
    }))

    return prisma.quizz.findUnique({
        where: {id: quizz.id}, include: {
            questions: {
                include: {
                    answers: {
                        select: {
                            id: true,
                            title: true
                        }
                    }
                }
            }
        }
    }) as unknown as Quizz;
}

async function getQuestionsForCategory(id: number): Promise<Question[]> {
    const response = await fetch(`https://opentdb.com/api.php?amount=7&category=${id}`, {next: {revalidate: 30}})
    const json = await response.json()
    return json['results'].map((rawResult: any, index: number) => normalizeQuestion(rawResult, index))
}

function normalizeQuestion(question: any, key: number): Question {
    return {
        id: key,
        title: decode(question["question"]),
        answers: [...question["incorrect_answers"], question["correct_answer"]].map((textAnswer: string, key: number): Answer => {
            return {id: key, title: decode(textAnswer), isCorrect: textAnswer === question["correct_answer"]}
        }),
        multiple: question["type"] === "multiple"
    }
}

export default page;
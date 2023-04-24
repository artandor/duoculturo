import QuizzComponent from '@/components/components/QuizzComponent';
import React from 'react'
// @ts-ignore
import decode from "decode-html"

type Props = {
    params: {
        category: number
    }
}

async function page({params}: Props) {
    const quizz: Quizz = await getQuizz(params.category);


    return (
        <div className='container mx-64 my-16'>
            <QuizzComponent quizz={quizz}/>
        </div>
    )
}

async function getQuizz(id: number): Promise<Quizz> {
    const quizz = {
        id,
        questions: await getQuestionsForCategory(id),
        theme: {id, name: "aaa"}
    }
    return quizz;
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
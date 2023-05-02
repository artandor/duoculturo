"use client";
import React, {useEffect, useState} from 'react'
import QuizzResult from "@/components/components/QuizzResult";
import {Progress} from "@/components/components/override/material";
import QuestionForm from "@/components/components/QuestionForm";
import {QuizzUser} from "@prisma/client";
import {useRouter} from "next/navigation";

type Props = {
    quizz: Quizz
    quizzUser: QuizzUser,
}

export default function QuizzComponent({quizz, quizzUser}: Props) {
    const router = useRouter()
    const lastAnsweredQuestionIndex = quizz.questions.findIndex((question) => question.id == quizzUser.lastEndedQuestion)

    let [questionIndex, setQuestionIndex] = useState(lastAnsweredQuestionIndex + 1 ?? 0)

    function isQuizzEnded(): boolean {
        return questionIndex >= quizz.questions.length;

    }

    useEffect(() => {
        if (questionIndex >= quizz.questions.length) {
            router.refresh()
        }
    }, [questionIndex, quizz.questions.length, router])

    return (
        <div>
            <Progress value={questionIndex / quizz.questions.length * 100}/>
            {!isQuizzEnded() ? <div>
                    <QuestionForm question={quizz.questions[questionIndex]} quizzUser={quizzUser}
                                  triggerNextQuestion={() => setQuestionIndex(questionIndex + 1)}/>
                </div>
                :
                <QuizzResult quizz={quizz}/>
            }
        </div>
    )
}


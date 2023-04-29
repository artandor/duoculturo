"use client";
import React, {useState} from 'react'
import QuizzResult from "@/components/components/QuizzResult";
import {Progress} from "@/components/components/override/material";
import QuestionForm from "@/components/components/QuestionForm";

type Props = {
    quizz: Quizz
}

export default function QuizzComponent({quizz}: Props) {
    function isQuizzEnded(): boolean {
        return questionIndex <= quizz.questions.length - 1;
    }

    let [questionIndex, setQuestionIndex] = useState(0)
    let [quizzScore, setQuizzScore] = useState(0)
    return (
        <div>
            <Progress value={questionIndex / quizz.questions.length * 100}/>
            {isQuizzEnded() ? <div>
                    <QuestionForm question={quizz.questions[questionIndex]}
                                  triggerNextQuestion={() => setQuestionIndex(questionIndex + 1)}
                                  increaseScore={() => setQuizzScore(quizzScore + 1)}/>
                </div>
                : <QuizzResult score={quizzScore} questionAmount={quizz.questions.length}/>}
        </div>
    )
}


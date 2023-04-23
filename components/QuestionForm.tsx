"use client";
import React, { useState } from 'react'
import AnswerComponent from './answer'
import { useForm } from "react-hook-form";
import { Button } from './override/material';

type Props = {
    question: Question;
    triggerNextQuestion?: Function;
    increaseScore?: Function;
}

type FormData = {
    answer: number[];
};

function QuestionForm({question, triggerNextQuestion, increaseScore}: Props) {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = handleSubmit(data => {
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/api/questions/${question.id}`, {
            'method': 'POST',
            'body': JSON.stringify({
                "selectedAnswers": [...data.answer]
            })
        }).then(async (response: Response) => {
            if(response.status === 200) {
                const json = await response.json()
                if(json.result) {
                    increaseScore && increaseScore()
                }
                triggerNextQuestion && triggerNextQuestion()
            }
        })

    });


return (
<form onSubmit={handleSubmit(onSubmit)}>
<h1>{question.title}</h1>
{question.answers.map((answer: Answer) => {
        return <AnswerComponent key={answer.id} answer={answer} question={question} register={register}/>
    })}

<Button variant="outlined" type='submit' fullWidth>Submit</Button>

</form>
)
}

export default QuestionForm
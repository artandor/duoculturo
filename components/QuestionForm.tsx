"use client";
import React, { useState } from 'react'
import AnswerComponent from './answer'
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from './override/material';

type Props = {
    question: Question;
    triggerNextQuestion?: Function;
    increaseScore?: Function;
}

type IFormInput = {
    answer: number[];
};


function QuestionForm({question, triggerNextQuestion, increaseScore}: Props) {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data => {
        fetch(`${process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : process.env.NEXT_PUBLIC_API_BASE_PATH}`, {
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
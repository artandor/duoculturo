"use client";
import React from 'react'
import AnswerComponent from './AnswerComponent'
import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from './override/material';

type Props = {
    question: Question;
    triggerNextQuestion?: Function;
    increaseScore?: Function;
}

type IFormInput = {
    answer: number[];
};


function QuestionForm({question, triggerNextQuestion, increaseScore}: Props) {
    const { register, setValue, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data => {
        fetch(`${window.location.origin}/api/questions/${question.id}`, {
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
                reset()
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
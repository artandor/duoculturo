"use client";
import React, {useEffect, useState} from 'react'
import AnswerComponent from './AnswerComponent'
import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from './override/material';
import {QuizzUser} from "@prisma/client";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";

type Props = {
    question: Question;
    quizzUser: QuizzUser,
    triggerNextQuestion?: Function;
}

type IFormInput = {
    answer: number[];
};


function QuestionForm({question, triggerNextQuestion, quizzUser}: Props) {
    const {register, setValue, handleSubmit, formState: {errors}, reset} = useForm<IFormInput>();
    const [showErrors, setShowErrors] = useState(false)


    useEffect(() => {
        setShowErrors(false)
    }, [question])

    const onSubmit: SubmitHandler<IFormInput> = (data => {
        fetch(`${window.location.origin}/api/questions/${question.id}`, {
            'method': 'POST',
            'body': JSON.stringify({
                "selectedAnswers": typeof data.answer === "string" ? [{id: Number(data.answer)}] : data.answer.map((answer) => {
                    return {id: Number(answer)}
                }),
                "quizzId": quizzUser.quizzId,
            })
        }).then(async (response: Response) => {
            if (response.status === 200) {
                // reset()
                // triggerNextQuestion && triggerNextQuestion()
                setShowErrors(true)
            }
        })

    });
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>{question.title}</h1>
            {question.answers.map((answer: any) => {
                return <AnswerComponent key={answer.id} answer={answer} question={question} register={register}
                                        showErrors={showErrors}/>
            })}

            {
                !showErrors ?
                    <Button variant="outlined" type='submit' fullWidth>Submit</Button>
                    :
                    <Button variant="filled" type='button' onClick={() => {
                        triggerNextQuestion && triggerNextQuestion();
                    }} fullWidth>
                        Next Question{" "}<FontAwesomeIcon icon={faArrowRight}/>
                    </Button>
            }

        </form>
    )
}

export default QuestionForm
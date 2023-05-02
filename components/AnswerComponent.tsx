"use client";

import React from 'react'
import {Checkbox, Radio} from './override/material';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";
import {faXmark} from "@fortawesome/free-solid-svg-icons/faXmark";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons/faLightbulb";
import {Typography} from "@/components/components/override/material";
import {Answer} from "@prisma/client";


type Props = {
    question: Question,
    answer: Answer,
    register: Function,
    showErrors: boolean
}

function AnswerComponent({answer, question, register, showErrors}: Props) {
    return (
        <div key={answer.id} className="flex gap-10">
            {question.multiple ?
                <div>
                    <Checkbox color='teal' {...register("answer")} id={answer.id} value={answer.id}
                              icon={<FontAwesomeIcon icon={faXmark}/>}/>
                    <label
                        className={`${showErrors ? (answer.isCorrect ? "text-green-500" : "text-red-500") : null}`}>{answer.title}</label>
                    {
                        showErrors && answer.additionnalInfos && <div className="flex ms-3 text-blue-gray-800">
                            <FontAwesomeIcon icon={faLightbulb} bounce={true} className="me-1"/>{" "}
                            <Typography>Did you know That ? {answer.additionnalInfos}</Typography>
                        </div>
                    }
                </div> :
                <div>
                    <Radio color='teal' {...register("answer")} id={answer.id} value={answer.id} label={answer.title}
                           icon={<FontAwesomeIcon icon={faCheck}/>}
                           labelProps={{className: `${showErrors ? (answer.isCorrect ? "text-green-500" : null) : null}`}}/>
                    {
                        showErrors && answer.additionnalInfos && <div className="flex ms-3 text-blue-gray-800">
                            <FontAwesomeIcon icon={faLightbulb} bounce={true} className="me-1"/>{" "}
                            <Typography>Did you know That ? {answer.additionnalInfos}</Typography>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default AnswerComponent
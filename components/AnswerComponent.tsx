"use client";

import React from 'react'
import {Checkbox, Radio} from './override/material';


type Props = {
    question: Question
    answer: Answer,
    register: Function
}

function AnswerComponent({answer, question, register}: Props) {
  return (
    <div key={answer.id} className="flex gap-10">
            {question.multiple ?
            <div>
              <Checkbox color='teal' {...register("answer")} value={answer.id }/>
            <label>{answer.title}</label>
            </div> :
            <Radio id="html" {...register("answer")} value={answer.id} label={answer.title} color='yellow'/>
            }
            </div>
  )
}

export default AnswerComponent
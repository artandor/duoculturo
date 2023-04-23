import QuestionForm from '@/components/components/QuestionForm';
import React from 'react'
import { getRandomQuestion } from '../api/questions/route';

type Props = {}

async function questionHome({}: Props) {
    const question: Question = await getData();


  return (
    <div className='container mx-64 my-16'>
      <QuestionForm question={question} />
    </div>
  )
}

async function getData() {
    return getRandomQuestion()
  }

export default questionHome
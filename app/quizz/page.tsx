import QuizzComponent from '@/components/components/QuizzComponent';
import React from 'react'
import { getRandomQuizz } from '../api/quizz/route';

type Props = {}

async function page({}: Props) {
    const quizz: Quizz = await getData();


  return (
    <div className='container mx-64 my-16'>
        <QuizzComponent quizz={quizz} />
    </div>
  )
}

async function getData() {
    return getRandomQuizz()
}

export default page;
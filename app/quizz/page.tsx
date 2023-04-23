import QuizzComponent from '@/components/components/QuizzComponent';
import React from 'react'
import { getRandomQuestion } from '../api/questions/route';

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

const quizz: Quizz[] = [
  {id: 1, theme: {name: "Kamelott"}, questions: [
      getRandomQuestion(),
      getRandomQuestion(),
      getRandomQuestion(),
      getRandomQuestion(),
      getRandomQuestion(),
  ]}
]

function getRandomQuizz(): Quizz {
  return quizz[Math.floor(Math.random() * (quizz.length))]
}

export default page;
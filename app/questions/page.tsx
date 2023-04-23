import QuestionForm from '@/components/components/QuestionForm';
import React from 'react'

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
    const res = await fetch(`${"https://" + process.env.VERCEL_URL ?? process.env.NEXT_PUBLIC_API_BASE_PATH}/api/questions`, {cache: 'no-cache'});

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

export default questionHome
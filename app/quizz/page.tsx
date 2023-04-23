import QuizzComponent from '@/components/components/QuizzComponent';
import React from 'react'

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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/api/quizz`, {cache: 'no-cache'});

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default page;
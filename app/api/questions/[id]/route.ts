import { NextResponse } from "next/server";
import { getQuestions } from "../route";


export async function POST(request: Request, {params} : {params: {id: number}}) {
  const id = params.id;

  const questions = getQuestions()


  const question: Question|undefined = questions.find((question: Question) => {
    return question.id == id
  })
  const res = await request.json();


  if (!question || !res.selectedAnswers) {
    return NextResponse.json({"result": false})
  }

  let resultIsCorrect = true;
  res.selectedAnswers.forEach((answerId: number) => {
    if (question.answers.find((answer => answer.id == answerId && !answer.isCorrect))) {
      resultIsCorrect = false;
    }
  });

  return NextResponse.json({"result": resultIsCorrect})
}
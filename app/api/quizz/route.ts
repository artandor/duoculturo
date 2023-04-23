import { NextResponse } from "next/server";
import { getRandomQuestion } from "../questions/route";

const quizz: Quizz[] = [
    {id: 1, theme: {name: "Kamelott"}, questions: [
        getRandomQuestion(),
        getRandomQuestion(),
        getRandomQuestion()
    ]}
]

export async function GET(request: Request) {
  return new NextResponse(JSON.stringify(getRandomQuizz()), {headers: {"Content-Type" : "application/json"}})
}

function getRandomQuizz() {
    return quizz[Math.floor(Math.random() * (quizz.length))]
}

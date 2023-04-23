import { headers } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

const questions: Question[] = [
  {id: 1, title: "Qu'est-ce qui est petit et marron ?", multiple: true, answers: [
    {id: 1, title: "Un marron", isCorrect: true},
    {id: 2, title: "Une crotte", isCorrect: false}
  ]},
  {id: 2, title: "De quelle couleur était le cheval blanc de Napoléon ?", multiple: false, answers: [
    {id: 1, title: "Blanc", isCorrect: true},
    {id: 2, title: "Noir", isCorrect: false},
    {id: 3, title: "Bleu blanc rouge", isCorrect: false}
  ]}
]

export async function GET(request: Request) {
  return new NextResponse(JSON.stringify(getRandomQuestion()), {headers: {"Content-Type" : "application/json"}})
}

export function getQuestions(): Question[] {
  return questions;
}

export function getRandomQuestion() {
  return questions[Math.floor(Math.random() * (questions.length))]
}
import {NextResponse} from "next/server";
import {prisma} from "@/components/lib/database";


export async function POST(request: Request, {params}: { params: { id: number } }) {
    const questionId = params.id;

    const answers: { id: number }[] = await prisma.answer.findMany({
        select: {id: true},
        where: {questionId: Number(questionId), isCorrect: true}
    })
    const res = await request.json();

    if (answers.length <= 0 || !res.selectedAnswers) {
        return NextResponse.json({"result": false})
    }

    return NextResponse.json({"result": JSON.stringify(res.selectedAnswers) === JSON.stringify(answers)})
}
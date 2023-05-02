import {NextResponse} from "next/server";
import {prisma} from "@/components/lib/database";
import {getCurrentUser} from "@/components/lib/session";

export async function POST(request: Request, {params}: { params: { id: number } }) {
    const questionId: number = Number(params.id);
    const user = await getCurrentUser()
    if (!user) return NextResponse.json({}, {status: 401})

    const answers: { id: number }[] = await prisma.answer.findMany({
        select: {id: true},
        where: {questionId: questionId, isCorrect: true}
    })
    const res = await request.json();

    await prisma.quizzUser.update({
        where: {
            userId_quizzId: {
                quizzId: Number(res.quizzId),
                userId: user.id,
            }
        },
        data: {
            lastEndedQuestion: questionId,
            score: {
                increment: JSON.stringify(res.selectedAnswers) === JSON.stringify(answers) ? 1 : 0
            }
        },
    })

    if (answers.length <= 0 || !res.selectedAnswers || !res.quizzId) {
        return NextResponse.json({"result": false})
    }

    return NextResponse.json({"result": JSON.stringify(res.selectedAnswers) === JSON.stringify(answers)})
}
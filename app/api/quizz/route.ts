import {prisma} from "@/components/lib/database";
import {NextResponse} from "next/server";
// @ts-ignore
import decode from "decode-html";
import {ENTRYPOINT} from "@/components/lib/tools";


export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);

    const quizzId = await generateQuizzForTheme(searchParams.get("slug") ?? "", 7)

    if (!quizzId) {
        return new NextResponse('', {
            status: 401,
            statusText: "Unauthorized."
        })
    }

    return NextResponse.json(new URL(`${ENTRYPOINT}/quizz/${searchParams.get("slug")}/${quizzId}`))
}

async function generateQuizzForTheme(themeSlug: string, questionAmount = 7): Promise<number | null> {
    let apiQuestions: Question[] = await getQuestionsForCategory(themeSlug, questionAmount);

    const quizz = await prisma.quizz.create({
        data: {}
    })

    await Promise.all(apiQuestions.map(async (apiQuestion) => {
        return prisma.question.create({
            data: {
                title: apiQuestion.title,
                theme: {
                    connect: {
                        slug: themeSlug
                    }
                },
                quizz: {
                    connect: {
                        id: quizz.id
                    }
                },
                multiple: apiQuestion.multiple,
                answers: {
                    createMany: {
                        data: apiQuestion.answers.map((answer: Answer) => {
                            return {
                                title: answer.title,
                                isCorrect: answer.isCorrect
                            }
                        })
                    }
                }
            }
        })
    }))

    return quizz.id;
}

async function getQuestionsForCategory(themeSlug: string, questionAmount: number): Promise<Question[]> {
    const theme = await prisma.theme.findUnique({where: {slug: themeSlug}})
    const response = await fetch(`https://opentdb.com/api.php?amount=${questionAmount}&category=${theme?.id}`, {next: {revalidate: 30}})
    const json = await response.json()
    return json['results'].map((rawResult: any, index: number) => normalizeQuestion(rawResult, index))
}

function normalizeQuestion(question: any, key: number): Question {
    return {
        id: key,
        title: decode(question["question"]),
        answers: [...question["incorrect_answers"], question["correct_answer"]].map((textAnswer: string, key: number): Answer => {
            return {id: key, title: decode(textAnswer), isCorrect: textAnswer === question["correct_answer"]}
        }),
        multiple: question["type"] === "multiple"
    }
}
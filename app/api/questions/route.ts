import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/components/lib/database";

export async function GET(request: NextRequest) {
    let page = Number(request.nextUrl.searchParams.get('page')) ?? 0;
    let cursor = Number(request.nextUrl.searchParams.get('cursor')) ?? 0;
    let pageSize = Number(request.nextUrl.searchParams.get('pageSize')) ?? 10;
    const results = await prisma.question.findMany(
        {
            take: pageSize,
            skip: 1,
            cursor: cursor ? {
                id: cursor,
            } : undefined,
            orderBy: {
                id: "asc"
            },
            include: {
                theme: {
                    select: {
                        name: true
                    }
                }
            }
        })
    return NextResponse.json(results)
}
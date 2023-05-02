import HistoryCard from "@/components/components/HistoryCard";
import {prisma} from "@/components/lib/database";
import {getCurrentUser} from "@/components/lib/session";

export async function ActivityList() {
    const activities = await getData()
    return (
        <div>
            {activities.map((item, key) => {
                return <HistoryCard key={key}
                                    activity={item}/>
            })}
        </div>
    );
}

async function getData() {
    const user = await getCurrentUser();

    return prisma.quizz.findMany({
        take: 5,
        where: {
            QuizzUser: {
                some: {
                    userId: user?.id
                }
            }
        },
        orderBy: {
            id: "desc"
        },
        include: {
            QuizzUser: true,
            questions: {
                include: {
                    theme: true,
                }
            }
        }
    })
}
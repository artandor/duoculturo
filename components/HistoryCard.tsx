import {Button, Card, CardBody, CardFooter, Typography} from "@/components/components/override/material";
import Link from "next/link";

interface Props {
    activity: any
}

export default function HistoryCard({activity}: Props) {
    return (
        <Card className="w-full max-w-[26rem] shadow-lg mb-3">
            <CardBody>
                <div className="mb-3 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray" className="font-medium">
                        {activity.questions[0]?.theme.name}
                    </Typography>
                </div>
                <Typography color="gray">
                    Score
                    : {activity.QuizzUser[0].lastEndedQuestion ? `${activity.QuizzUser[0].score + 1} / ${activity.questions.length}` : "Not Started"}
                </Typography>
            </CardBody>
            <CardFooter className="pt-3">
                {
                    activity.QuizzUser.score >= activity.questions.length || !activity.QuizzUser.score &&
                    <Link href={`/quizz/${activity.questions[0]?.theme.slug}/${activity.id}`}>
                        <Button size="lg" fullWidth={true}>
                            Play this quizz again
                        </Button>
                    </Link>
                }
            </CardFooter>
        </Card>
    );
}
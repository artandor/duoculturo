"use client";
import {Typography} from "@/components/components/override/material";
import React, {useEffect, useRef} from "react";

interface Props {
    question: { id: number, title: string, theme: Theme },
    isLast: boolean,
    loadNextItems: Function
}

export default function QuestionTableRow({question, isLast, loadNextItems}: Props) {
    const cardRef = useRef(null);

    /**
     * Implement Intersection Observer to check if the last Card in the array is visible on the screen, then set a new limit
     */
    useEffect(() => {
        if (!cardRef?.current) return;

        const observer = new IntersectionObserver(async ([entry]) => {
            if (isLast && entry.isIntersecting) {
                await loadNextItems();
                observer.unobserve(entry.target);
            }
        });

        observer.observe(cardRef.current);
    }, [isLast]);

    return (
        <tr key={question.id} className="even:bg-blue-gray-50/50" ref={cardRef}>
            <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {question.id}
                </Typography>
            </td>
            <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {question.title}
                </Typography>
            </td>
            <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    {question.theme.name}
                </Typography>
            </td>
        </tr>
    )
}

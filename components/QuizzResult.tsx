"use client"
import React from 'react'
import {IconButton, Typography} from '@/components/components/override/material'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'

interface Props {
    quizz: any
}

function QuizzResult({quizz}: Props) {
    return (
        <div className='text-center'>
            <Typography variant="h2"><IconButton><FontAwesomeIcon icon={faCheckCircle}/></IconButton></Typography>
            <Typography variant="h1">Bravo ! Vous avez obtenu un score
                de {quizz?.QuizzUser[0].score + 1} sur {quizz?._count?.questions}</Typography>
            <div className="mt-10">
                <Typography variant="h3">Share it with the world !!</Typography>
            </div>
        </div>
    )
}

export default QuizzResult
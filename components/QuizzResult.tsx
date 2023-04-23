import React from 'react'
import { IconButton, Typography } from './override/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'

type Props = {
    score: number;
    questionAmount: number;
}

function QuizzResult({score, questionAmount}: Props) {
  return (
    <div className='text-center'>
        <Typography variant="h2"><IconButton><FontAwesomeIcon icon={faCheckCircle} /></IconButton></Typography>
        <Typography variant="h1">Bravo ! Vous avez obtenu un score de {score} sur {questionAmount}</Typography>
    </div>
  )
}

export default QuizzResult
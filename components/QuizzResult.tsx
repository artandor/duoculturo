"use client"
import React from 'react'
import {IconButton, Typography} from '@/components/components/override/material'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'
import {FacebookMessengerIcon, FacebookMessengerShareButton} from "@/components/components/override/next-share";

interface Props {
    score: number;
    questionAmount: number;
}

function QuizzResult({score, questionAmount}: Props) {
    return (
        <div className='text-center'>
            <Typography variant="h2"><IconButton><FontAwesomeIcon icon={faCheckCircle}/></IconButton></Typography>
            <Typography variant="h1">Bravo ! Vous avez obtenu un score de {score} sur {questionAmount}</Typography>
            <div className="mt-10">
                <Typography variant="h3">Share it with the world !!</Typography>
                <FacebookMessengerShareButton
                    url={window.location.href}
                    appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID ?? ''}
                >
                    <FacebookMessengerIcon size={32} round/>
                </FacebookMessengerShareButton>
            </div>
        </div>
    )
}

export default QuizzResult
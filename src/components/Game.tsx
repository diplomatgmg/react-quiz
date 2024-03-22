import React, { type ReactElement } from 'react'
import { useAppSelector } from '../redux/hooks'
import { QUESTIONS } from '../constants'
import ProgressBar from './ProgressBar'
import QuizContent from './QuizContent'

const Game = (): ReactElement => {
  const correctAnswers = useAppSelector((state) => state.quiz.correctAnswers)

  const progressStatus = (correctAnswers / QUESTIONS.length) * 100

  return (
    <>
      <ProgressBar status={progressStatus}/>
      <QuizContent/>
    </>
  )
}

export default Game

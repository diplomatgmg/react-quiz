import React, { type ReactElement } from 'react'
import { useAppSelector } from '../redux/hooks'
import { QUESTIONS } from '../constants'

const Game = (): ReactElement => {
  const currentQuestionIndex = useAppSelector((state) => state.quiz.currentQuestionIndex)
  const correctAnswers = useAppSelector((state) => state.quiz.correctAnswers)

  const { title, variants, correct } = QUESTIONS[currentQuestionIndex]
  const progressStatus = (correctAnswers / QUESTIONS.length) * 100

  return (
    <>
      <div className="progress">
        <div style={{ width: `${progressStatus}%` }} className="progress__inner"></div>
      </div>
      <h1>{title}</h1>
      <ul>
        {variants.map(variant => <li key={variant}>{variant}</li>)}
      </ul>
    </>
  )
}

export default Game

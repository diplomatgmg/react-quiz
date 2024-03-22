import React, { type ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { QUESTIONS } from '../constants'
import { addCorrectAnswer, updateCurrentQuestionIndex } from '../redux/quizSlice'

const Game = (): ReactElement => {
  const currentQuestionIndex = useAppSelector((state) => state.quiz.currentQuestionIndex)
  const correctAnswers = useAppSelector((state) => state.quiz.correctAnswers)

  const dispatch = useAppDispatch()

  const { title, variants, correct } = QUESTIONS[currentQuestionIndex]
  const progressStatus = (correctAnswers / QUESTIONS.length) * 100

  const handleSelectAnswer = (selectedAnswer: number): void => {
    if (selectedAnswer === correct) {
      dispatch(addCorrectAnswer())
    }
    dispatch(updateCurrentQuestionIndex())
  }

  return (
    <>
      <div className="progress">
        <div style={{ width: `${progressStatus}%` }} className="progress__inner"></div>
      </div>
      <h1>{title}</h1>
      <ul>
        {variants.map((variant, index) => <li key={variant} onClick={() => handleSelectAnswer(index)}>{variant}</li>)}
      </ul>
    </>
  )
}

export default Game

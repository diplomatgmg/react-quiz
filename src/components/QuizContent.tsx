import React, { type ReactElement } from 'react'
import QuestionItem from './QuestionItem'
import { QUESTIONS } from '../constants'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addCorrectAnswer, updateCurrentQuestionIndex } from '../redux/quizSlice'

const QuizContent = (): ReactElement => {
  const currentQuestionIndex = useAppSelector((state) => state.quiz.currentQuestionIndex)

  const dispatch = useAppDispatch()

  const { title, variants, correct } = QUESTIONS[currentQuestionIndex]

  const handleSelectAnswer = (selectedAnswer: number): void => {
    if (selectedAnswer === correct) {
      dispatch(addCorrectAnswer())
    }
    dispatch(updateCurrentQuestionIndex())
  }

  return (
    <>
      <h1>{title}</h1>
      <ul>
        {variants.map((variant, index) => (
          <QuestionItem variant={variant} index={index} handleSelectAnswer={handleSelectAnswer}/>
        ))}
      </ul>
    </>
  )
}

export default QuizContent

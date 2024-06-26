import React, { type ReactElement } from 'react'
import QuestionItem from './QuestionItem'
import { QUESTIONS } from '../constants'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addCorrectAnswer, updateCurrentQuestionIndex } from '../redux/quizSlice'
import styled from 'styled-components'

const GameContainer = styled.div`
    h1 {
        margin: 0 0 24px 0;
    }

    ul {
        padding: 0;

        list-style: none;
    }
`

const Game = (): ReactElement => {
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
    <GameContainer>
      <h1>{title}</h1>
      <ul>
        {variants.map((variant, index) => (
          <QuestionItem key={variant} variant={variant} index={index} handleSelectAnswer={handleSelectAnswer}/>
        ))}
      </ul>
    </GameContainer>
  )
}

export default Game

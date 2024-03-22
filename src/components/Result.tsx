import React, { type ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { QUESTIONS } from '../constants'
import { resetQuiz } from '../redux/quizSlice'
import Button from './Button'
import styled from 'styled-components'

const ResultContainer = styled.div`
    text-align: center;

    h2 {
        margin-bottom: 0;
    }

    img {
        width: 150px;
    }
`

const Result = (): ReactElement => {
  const correctAnswers = useAppSelector((state) => state.quiz.correctAnswers)

  const dispatch = useAppDispatch()

  const handleResetQuiz = (): void => {
    dispatch(resetQuiz())
  }

  return (
    <ResultContainer>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt=""/>
      <h2>Вы отгадали {correctAnswers} ответа из {QUESTIONS.length}</h2>
      <Button onClick={handleResetQuiz}/>
    </ResultContainer>
  )
}

export default Result

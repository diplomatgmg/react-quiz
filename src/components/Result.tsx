import React, { type ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { QUESTIONS } from '../constants'
import { resetQuiz } from '../redux/quizSlice'

const Result = (): ReactElement => {
  const correctAnswers = useAppSelector((state) => state.quiz.correctAnswers)

  const dispatch = useAppDispatch()

  const handleResetQuiz = (): void => {
    dispatch(resetQuiz())
  }

  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt=""/>
      <h2>Вы отгадали {correctAnswers} ответа из {QUESTIONS.length}</h2>
      <button onClick={handleResetQuiz}>Попробовать снова</button>
    </div>
  )
}

export default Result

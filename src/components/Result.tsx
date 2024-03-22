import React, { type ReactElement } from 'react'
import { useAppSelector } from '../redux/hooks'
import { QUESTIONS } from '../constants'

const Result = (): ReactElement => {
  const correctAnswers = useAppSelector((state) => state.quiz.correctAnswers)

  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt=""/>
      <h2>Вы отгадали {correctAnswers} ответа из {QUESTIONS.length}</h2>
      <button>Попробовать снова</button>
    </div>
  )
}

export default Result

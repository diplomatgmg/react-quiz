import React, { type ReactElement } from 'react'
import Game from './components/Game'
import './style.scss'
import Result from './components/Result'
import { useAppSelector } from './redux/hooks'
import { QUESTIONS } from './constants'

const App = (): ReactElement => {
  const currentQuestionIndex = useAppSelector((state) => state.quiz.currentQuestionIndex)

  const hasNextQuestion = currentQuestionIndex < QUESTIONS.length

  return (
    <div className="App">
      {hasNextQuestion ? <Game/> : <Result />}
    </div>
  )
}

export default App

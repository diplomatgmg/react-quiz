import React, { type ReactElement } from 'react'
import Game from './components/Game'
import './style.scss'
import Result from './components/Result'
import { useAppSelector } from './redux/hooks'
import { QUESTIONS } from './constants'
import styled from 'styled-components'
import ProgressBar from './components/ProgressBar'

const AppContainer = styled.div`
    position: relative;

    width: 500px;
    padding: 40px;

    border-radius: 30px;  
    background-color: #fff;

    &:before,
    &:after {
        position: absolute;
        left: 50%;

        display: block;

        height: 50px;

        content: '';
        transform: translateX(-50%);

        border-bottom-right-radius: 30px;
        border-bottom-left-radius: 30px;
    }

    &:before {
        z-index: 0;
        bottom: -10px;

        width: 95%;

        background-color: rgba(255, 255, 255, .8);
    }

    &:after {
        z-index: 1;
        bottom: -20px;

        width: 90%;

        background-color: rgba(255, 255, 255, .3);
    }
`

const App = (): ReactElement => {
  const currentQuestionIndex = useAppSelector((state) => state.quiz.currentQuestionIndex)
  const correctAnswers = useAppSelector((state) => state.quiz.correctAnswers)

  const progressStatus = (correctAnswers / QUESTIONS.length) * 100

  const hasNextQuestion = currentQuestionIndex < QUESTIONS.length

  return (
    <AppContainer>
      <ProgressBar status={progressStatus}></ProgressBar>
      {hasNextQuestion ? <Game/> : <Result />}
    </AppContainer>
  )
}

export default App

import React, { type ReactElement } from 'react'
import Game from './components/Game'
import './style.scss'
import Result from './components/Result'

const App = (): ReactElement => {
  return (
    <div className="App">
      <Game/>
      <Result/>
    </div>
  )
}

export default App

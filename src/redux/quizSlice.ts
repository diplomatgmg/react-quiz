import { createSlice } from '@reduxjs/toolkit'
import reducers from './reducers'

interface QuizState {
  currentQuestionIndex: number
  correctAnswers: number
}

const initialState: QuizState = {
  currentQuestionIndex: 0,
  correctAnswers: 0
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers
})

export const {
  addCorrectAnswer,
  updateCurrentQuestionIndex,
  resetQuiz
} = quizSlice.actions

export default quizSlice.reducer
export { type QuizState }

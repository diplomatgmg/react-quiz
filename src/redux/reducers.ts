import { type QuizState } from './quizSlice'

export default {
  addCorrectAnswer (state: QuizState) {
    state.correctAnswers += 1
  },
  updateCurrentQuestionIndex (state: QuizState) {
    state.currentQuestionIndex += 1
  }
}

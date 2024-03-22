import React, { type FC, type ReactElement } from 'react'

interface QuestionItemProps {
  variant: string
  index: number
  handleSelectAnswer: (index: number) => void
}

const QuestionItem: FC<QuestionItemProps> = ({ variant, index, handleSelectAnswer }): ReactElement => {
  return <li onClick={() => handleSelectAnswer(index)}>{variant}</li>
}

export default QuestionItem

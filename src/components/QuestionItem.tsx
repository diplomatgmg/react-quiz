import React, { type FC, type ReactElement } from 'react'
import styled from 'styled-components'

interface QuestionItemProps {
  variant: string
  index: number
  handleSelectAnswer: (index: number) => void
}

const Li = styled.li`
    margin-bottom: 10px;
    padding: 15px;

    cursor: pointer;
    transition: all .1s ease-in-out;

    border: 2px solid rgba(0, 0, 0, .1);
    border-radius: 15px;

    &:hover {
        border: 2px solid rgba(0, 0, 0, .3);
    }
`

const QuestionItem: FC<QuestionItemProps> = ({ variant, index, handleSelectAnswer }): ReactElement => {
  return <Li onClick={() => handleSelectAnswer(index)}>{variant}</Li>
}

export default QuestionItem

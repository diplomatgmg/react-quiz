import React, { type FC, type ReactElement } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  onClick: () => void
}

const StyledButton = styled.button`
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    font-weight: bold;

    margin-top: 20px;
    padding: 15px 30px;

    cursor: pointer;

    color: #fff;
    border: 1px solid transparent;
    border-radius: 30px;
    background-color: #ff006e;

    &:hover {
        color: #ff006e;
        background-color: #fff;
        border: 1px solid black;
        transition: linear 100ms;
    }
`

const Button: FC<ButtonProps> = ({ onClick }): ReactElement => {
  return (
    <StyledButton onClick={onClick}>Попробовать снова</StyledButton>
  )
}

export default Button

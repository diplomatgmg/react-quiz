import React, { type FC, type ReactElement } from 'react'
import styled from 'styled-components'

interface ProgressBarProps {
  status: number
}

const ProgressContainer = styled.div`
    height: 10px;
    margin-bottom: 25px;

    border-radius: 30px;
    background-color: rgb(232, 232, 232);
`

const ProgressInner = styled.div<{ status: number }>`
    width: ${({ status }) => status}%;
    height: 100%;

    transition: all .3s ease-in-out;

    border-radius: 30px;
    background: rgb(18, 231, 48);
    background: linear-gradient(90deg, rgba(18, 231, 48, 1) 0%, rgba(0, 212, 255, 1) 100%);
`

const ProgressBar: FC<ProgressBarProps> = ({ status }): ReactElement => {
  return (
    <ProgressContainer>
      <ProgressInner status={status}></ProgressInner>
    </ProgressContainer>
  )
}

export default ProgressBar
